import { collection, getDocs, query, setDoc, doc, where } from 'firebase/firestore';
import { firestore } from './firebaseConfig';
import { Doctor } from '../types/roles';

export const checkIfDoctor = async (email: string) => {
  const q = query(collection(firestore, 'doctors'), where('email', '==', email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};

export const addDoctor = async (doctor: Doctor) => {
  await setDoc(doc(firestore, 'doctors', doctor.id), doctor);
};
