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
  db,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
  addDoc
} from '../lib/firebase';
import { UserProfileData, ReviewSessionStats, Flashcard } from '../types';

interface AuthContextType {
  user: User | null;
  userProfile: UserProfileData | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInEmail: (email: string, pass: string) => Promise<void>;
  signUpEmail: (email: string, pass: string, name: string) => Promise<void>;
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
  const [loading, setLoading] = useState(true);

  // Monitor auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Load user profile from firestore
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            setUserProfile(docSnap.data() as UserProfileData);
          } else {
            // Create initial profile
            const initialProfile: UserProfileData = {
              userId: currentUser.uid,
              displayName: currentUser.displayName || 'Concurseiro TI',
              email: currentUser.email || '',
              photoURL: currentUser.photoURL || undefined,
              targetBanca: 'TODAS',
              targetConcurso: 'Auditor de TI / Analista',
              dailyGoalCards: 20,
              createdAt: new Date().toISOString(),
              lastActiveAt: new Date().toISOString(),
            };
            await setDoc(userDocRef, initialProfile);
            setUserProfile(initialProfile);
          }
        } catch (err) {
          console.error('Error fetching user profile:', err);
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
    } catch (err) {
      console.error('Google Sign In failed:', err);
      throw err;
    }
  };

  const signInEmail = async (email: string, pass: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (err) {
      console.error('Email sign in failed:', err);
      throw err;
    }
  };

  const signUpEmail = async (email: string, pass: string, name: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const newUser = userCredential.user;
      const initialProfile: UserProfileData = {
        userId: newUser.uid,
        displayName: name || 'Concurseiro TI',
        email: newUser.email || '',
        targetBanca: 'TODAS',
        targetConcurso: 'Analista de TI / Auditor',
        dailyGoalCards: 20,
        createdAt: new Date().toISOString(),
        lastActiveAt: new Date().toISOString(),
      };
      await setDoc(doc(db, 'users', newUser.uid), initialProfile);
      setUserProfile(initialProfile);
    } catch (err) {
      console.error('Sign up failed:', err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Sign out failed:', err);
    }
  };

  const updateUserProfileData = async (data: Partial<UserProfileData>) => {
    if (!user) return;
    try {
      const userDocRef = doc(db, 'users', user.uid);
      const updated = {
        ...userProfile,
        ...data,
        lastActiveAt: new Date().toISOString(),
      };
      await setDoc(userDocRef, updated, { merge: true });
      setUserProfile(updated as UserProfileData);
    } catch (err) {
      console.error('Error updating user profile:', err);
    }
  };

  const saveCloudStats = async (stats: ReviewSessionStats) => {
    if (!user) return;
    try {
      const statsDocRef = doc(db, 'study_stats', user.uid);
      await setDoc(statsDocRef, {
        userId: user.uid,
        ...stats,
        updatedAt: new Date().toISOString(),
      }, { merge: true });
    } catch (err) {
      console.error('Error saving study stats to cloud:', err);
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
      console.error('Error loading study stats from cloud:', err);
    }
    return null;
  };

  const addCustomCardToCloud = async (cardData: Omit<Flashcard, 'id'>): Promise<string | null> => {
    if (!user) return null;
    try {
      const docRef = await addDoc(collection(db, 'custom_cards'), {
        ...cardData,
        userId: user.uid,
        createdAt: new Date().toISOString(),
      });
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
      console.error('Error loading user custom cards from cloud:', err);
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
