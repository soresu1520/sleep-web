import { collection, getDocs, query, setDoc, addDoc, doc, where } from 'firebase/firestore';
import { firestore } from './firebaseConfig';
import { Doctor, Patient } from '../types/common';

export const checkIfDoctor = async (email: string) => {
  const q = query(collection(firestore, 'doctors'), where('email', '==', email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};

export const addDoctor = async (doctor: Doctor, uid: string) => {
  await setDoc(doc(firestore, 'doctors', uid), doctor);
};

export const checkIfPatientExists = async (email: string) => {
  const q = query(collection(firestore, 'patients'), where('email', '==', email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};

export const addPatient = async (patient: Patient) => {
  await addDoc(collection(firestore, 'patients'), patient);
};

export const getPatients = async (doctorId: string) => {
  const q = query(collection(firestore, 'patients'), where('doctorId', '==', doctorId));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};
