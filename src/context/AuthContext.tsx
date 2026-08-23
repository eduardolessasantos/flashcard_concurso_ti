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
import { UserProfileData, ReviewSessionStats, Flashcard } from '../types';

const GUEST_STORAGE_KEY = 'devconcursos_guest_profile_v1';

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
  isGuest: boolean;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInEmail: (email: string, pass: string) => Promise<void>;
  signUpEmail: (email: string, pass: string, name: string) => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  loginAsGuest: () => void;
  logout: () => Promise<void>;
  updateUserProfileData: (data: Partial<UserProfileData>) => Promise<void>;
  saveCloudStats: (stats: ReviewSessionStats) => Promise<void>;
  loadCloudStats: () => Promise<ReviewSessionStats | null>;
  addCustomCardToCloud: (card: Omit<Flashcard, 'id'>) => Promise<string | null>;
  loadUserCustomCards: () => Promise<Flashcard[]>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);
  const [isGuest, setIsGuest] = useState<boolean>(() => {
    return localStorage.getItem(GUEST_STORAGE_KEY) === 'true';
  });
  const [loading, setLoading] = useState(true);

  // Monitor auth state changes from Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // If logged into Firebase, clear guest flag
        setIsGuest(false);
        localStorage.removeItem(GUEST_STORAGE_KEY);

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
          // Fallback profile so user can still study even if Firestore encounters network delays
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
        // Not logged into Firebase. Check if user is in Guest mode
        const savedGuest = localStorage.getItem(GUEST_STORAGE_KEY) === 'true';
        if (savedGuest) {
          setIsGuest(true);
          setUserProfile({
            userId: 'guest_user_local',
            displayName: 'Visitante Concurseiro',
            email: 'visitante@devconcursos.local',
            targetBanca: 'TODAS',
            targetConcurso: 'Modo Demonstração / Testes',
            dailyGoalCards: 20,
            createdAt: new Date().toISOString(),
            lastActiveAt: new Date().toISOString(),
            isGuest: true,
          });
        } else {
          setIsGuest(false);
          setUserProfile(null);
        }
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

  const loginAsGuest = () => {
    localStorage.setItem(GUEST_STORAGE_KEY, 'true');
    setIsGuest(true);
    setUserProfile({
      userId: 'guest_user_local',
      displayName: 'Visitante Concurseiro',
      email: 'visitante@devconcursos.local',
      targetBanca: 'TODAS',
      targetConcurso: 'Modo Demonstração / Testes',
      dailyGoalCards: 20,
      createdAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
      isGuest: true,
    });
  };

  const logout = async () => {
    try {
      localStorage.removeItem(GUEST_STORAGE_KEY);
      setIsGuest(false);
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

    if (user && !isGuest) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, sanitizeForFirestore(updated), { merge: true });
      } catch (err) {
        console.error('Error updating user profile in cloud:', err);
      }
    }
  };

  const saveCloudStats = async (stats: ReviewSessionStats) => {
    if (!user || isGuest) return;
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
    if (!user || isGuest) return null;
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

  const addCustomCardToCloud = async (cardData: Omit<Flashcard, 'id'>): Promise<string | null> => {
    if (!user || isGuest) return null;
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
    if (!user || isGuest) return [];
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
        isGuest,
        loading,
        signInWithGoogle,
        signInEmail,
        signUpEmail,
        sendPasswordReset,
        loginAsGuest,
        logout,
        updateUserProfileData,
        saveCloudStats,
        loadCloudStats,
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
