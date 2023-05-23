import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from 'firebase/auth';
import { createContext, PropsWithChildren, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase/firebaseConfig';

type AuthContextType = {
  currentUser: User | null;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserPassword: (email: string) => Promise<void> | null;
  getUser: () => User | null;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
      }
    });

    return unsubscribe;
  }, []);

  const signUp = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  const resetPassword = (email: string) => sendPasswordResetEmail(auth, email);

  const updateUserPassword = (password: string) =>
    currentUser && updatePassword(currentUser, password);

  const getUser = () => auth.currentUser;

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
    updateUserPassword,
    getUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
