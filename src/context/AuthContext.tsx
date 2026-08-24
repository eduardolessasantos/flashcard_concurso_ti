import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  db,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  addDoc
} from '../lib/firebase';
import { 
  UserProfileData, 
  ReviewSessionStats, 
  Flashcard, 
  UserCardProgressMap, 
  UserLessonProgress 
} from '../types';

/**
 * Utility to strip undefined properties recursively so Firestore setDoc never throws.
 */
function sanitizeForFirestore<T extends Record<string, any>>(obj: T): Record<string, any> {
  const result: Record<string, any> = {};
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (val !== undefined) {
      if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
        result[key] = sanitizeForFirestore(val);
      } else {
        result[key] = val;
      }
    }
  }
  return result;
}

export interface AuthContextType {
  user: User | null;
  userProfile: UserProfileData | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInEmail: (email: string, pass: string) => Promise<void>;
  signUpEmail: (email: string, pass: string, name: string) => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfileData: (data: Partial<UserProfileData>) => Promise<void>;
  saveCloudStats: (stats: ReviewSessionStats) => Promise<void>;
  loadCloudStats: () => Promise<ReviewSessionStats | null>;
  saveUserCardProgress: (progress: UserCardProgressMap) => Promise<void>;
  loadUserCardProgress: () => Promise<UserCardProgressMap | null>;
  saveUserLessonProgress: (progress: Omit<UserLessonProgress, 'userId' | 'updatedAt'>) => Promise<void>;
  loadUserLessonProgress: () => Promise<UserLessonProgress | null>;
  addCustomCardToCloud: (card: Omit<Flashcard, 'id'>) => Promise<string | null>;
  loadUserCustomCards: () => Promise<Flashcard[]>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  // Monitor auth state changes from Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(userDocRef);
          
          if (docSnap.exists()) {
            setUserProfile(docSnap.data() as UserProfileData);
          } else {
            // Build and sanitize initial profile
            const initialProfile: UserProfileData = {
              userId: currentUser.uid,
              displayName: currentUser.displayName || currentUser.email?.split('@')[0] || 'Concurseiro TI',
              email: currentUser.email || '',
              targetBanca: 'TODAS',
              targetConcurso: 'Auditor / Analista de TI',
              dailyGoalCards: 20,
              createdAt: new Date().toISOString(),
              lastActiveAt: new Date().toISOString(),
            };

            if (currentUser.photoURL) {
              initialProfile.photoURL = currentUser.photoURL;
            }

            await setDoc(userDocRef, sanitizeForFirestore(initialProfile));
            setUserProfile(initialProfile);
          }
        } catch (err) {
          console.warn('Could not sync profile with Firestore, using session fallback:', err);
          setUserProfile({
            userId: currentUser.uid,
            displayName: currentUser.displayName || currentUser.email?.split('@')[0] || 'Concurseiro TI',
            email: currentUser.email || '',
            targetBanca: 'TODAS',
            targetConcurso: 'Auditor / Analista de TI',
            dailyGoalCards: 20,
            createdAt: new Date().toISOString(),
            lastActiveAt: new Date().toISOString(),
          });
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      console.error('Google Sign In failed:', err);
      throw err;
    }
  };

  const signInEmail = async (email: string, pass: string) => {
    try {
      await signInWithEmailAndPassword(auth, email.trim(), pass);
    } catch (err: any) {
      console.error('Email sign in failed:', err);
      throw err;
    }
  };

  const signUpEmail = async (email: string, pass: string, name: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), pass);
      const newUser = userCredential.user;
      
      const initialProfile: UserProfileData = {
        userId: newUser.uid,
        displayName: name.trim() || 'Concurseiro TI',
        email: newUser.email || email.trim(),
        targetBanca: 'TODAS',
        targetConcurso: 'Analista de TI / Auditor',
        dailyGoalCards: 20,
        createdAt: new Date().toISOString(),
        lastActiveAt: new Date().toISOString(),
      };

      try {
        await setDoc(doc(db, 'users', newUser.uid), sanitizeForFirestore(initialProfile));
      } catch (firestoreErr) {
        console.warn('Firestore initial profile write error:', firestoreErr);
      }
      
      setUserProfile(initialProfile);
    } catch (err: any) {
      console.error('Sign up failed:', err);
      throw err;
    }
  };

  const sendPasswordReset = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email.trim());
    } catch (err: any) {
      console.error('Password reset email failed:', err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      setUserProfile(null);
      if (auth.currentUser) {
        await signOut(auth);
      }
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  const updateUserProfileData = async (data: Partial<UserProfileData>) => {
    const updated = {
      ...userProfile,
      ...data,
      lastActiveAt: new Date().toISOString(),
    } as UserProfileData;

    setUserProfile(updated);

    if (user) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, sanitizeForFirestore(updated), { merge: true });
      } catch (err) {
        console.error('Error updating user profile in cloud:', err);
      }
    }
  };

  const saveCloudStats = async (stats: ReviewSessionStats) => {
    if (!user) return;
    try {
      const statsDocRef = doc(db, 'study_stats', user.uid);
      await setDoc(statsDocRef, sanitizeForFirestore({
        userId: user.uid,
        ...stats,
        updatedAt: new Date().toISOString(),
      }), { merge: true });
    } catch (err) {
      console.warn('Error saving study stats to cloud:', err);
    }
  };

  const loadCloudStats = async (): Promise<ReviewSessionStats | null> => {
    if (!user) return null;
    try {
      const statsDocRef = doc(db, 'study_stats', user.uid);
      const docSnap = await getDoc(statsDocRef);
      if (docSnap.exists()) {
        return docSnap.data() as ReviewSessionStats;
      }
    } catch (err) {
      console.warn('Error loading study stats from cloud:', err);
    }
    return null;
  };

  const saveUserCardProgress = async (cardStates: UserCardProgressMap) => {
    if (!user) return;
    try {
      const cardProgressDocRef = doc(db, 'user_card_progress', user.uid);
      await setDoc(cardProgressDocRef, sanitizeForFirestore({
        userId: user.uid,
        cardStates,
        updatedAt: new Date().toISOString(),
      }), { merge: true });
    } catch (err) {
      console.warn('Error saving card progress to cloud:', err);
    }
  };

  const loadUserCardProgress = async (): Promise<UserCardProgressMap | null> => {
    if (!user) return null;
    try {
      const cardProgressDocRef = doc(db, 'user_card_progress', user.uid);
      const docSnap = await getDoc(cardProgressDocRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        return (data.cardStates || null) as UserCardProgressMap;
      }
    } catch (err) {
      console.warn('Error loading card progress from cloud:', err);
    }
    return null;
  };

  const saveUserLessonProgress = async (progress: Omit<UserLessonProgress, 'userId' | 'updatedAt'>) => {
    if (!user) return;
    try {
      const lessonDocRef = doc(db, 'user_lesson_progress', user.uid);
      await setDoc(lessonDocRef, sanitizeForFirestore({
        userId: user.uid,
        ...progress,
        updatedAt: new Date().toISOString(),
      }), { merge: true });
    } catch (err) {
      console.warn('Error saving lesson progress to cloud:', err);
    }
  };

  const loadUserLessonProgress = async (): Promise<UserLessonProgress | null> => {
    if (!user) return null;
    try {
      const lessonDocRef = doc(db, 'user_lesson_progress', user.uid);
      const docSnap = await getDoc(lessonDocRef);
      if (docSnap.exists()) {
        return docSnap.data() as UserLessonProgress;
      }
    } catch (err) {
      console.warn('Error loading lesson progress from cloud:', err);
    }
    return null;
  };

  const addCustomCardToCloud = async (cardData: Omit<Flashcard, 'id'>): Promise<string | null> => {
    if (!user) return null;
    try {
      const docRef = await addDoc(collection(db, 'custom_cards'), sanitizeForFirestore({
        ...cardData,
        userId: user.uid,
        createdAt: new Date().toISOString(),
      }));
      return docRef.id;
    } catch (err) {
      console.error('Error adding custom card to cloud:', err);
      return null;
    }
  };

  const loadUserCustomCards = async (): Promise<Flashcard[]> => {
    if (!user) return [];
    try {
      const q = query(collection(db, 'custom_cards'), where('userId', '==', user.uid));
      const querySnap = await getDocs(q);
      const loaded: Flashcard[] = [];
      querySnap.forEach((d) => {
        const data = d.data();
        loaded.push({
          id: d.id,
          userId: data.userId,
          banca: data.banca,
          topico: data.topico,
          subtopico: data.subtopico || '',
          tipo: data.tipo || 'conceitual',
          pergunta: data.pergunta,
          resposta: data.resposta,
          explicacao: data.explicacao || '',
          gabaritoOficial: data.gabaritoOficial,
          dica: data.dica,
          concurso: data.concurso,
          ano: data.ano,
          trechoCodigo: data.trechoCodigo,
          statusSRS: data.statusSRS || 'novo'
        });
      });
      return loaded;
    } catch (err) {
      console.warn('Error loading user custom cards from cloud:', err);
      return [];
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        signInWithGoogle,
        signInEmail,
        signUpEmail,
        sendPasswordReset,
        logout,
        updateUserProfileData,
        saveCloudStats,
        loadCloudStats,
        saveUserCardProgress,
        loadUserCardProgress,
        saveUserLessonProgress,
        loadUserLessonProgress,
        addCustomCardToCloud,
        loadUserCustomCards,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
