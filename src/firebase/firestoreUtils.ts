import {
  collection,
  getDocs,
  query,
  setDoc,
  doc,
  where,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
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
  await setDoc(doc(firestore, 'patients', patient.id), patient);
};

export const getPatients = async (doctorId: string) => {
  const q = query(collection(firestore, 'patients'), where('doctorId', '==', doctorId));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

export const getPatient = async (patientId: string) => {
  const docRef = doc(firestore, 'patients', patientId);
  const snapshot = await getDoc(docRef);
  return snapshot;
};

export const updatePatient = async (patient: Partial<Patient>, patientId: string) => {
  const docRef = doc(firestore, 'patients', patientId);
  await updateDoc(docRef, patient);
};

export const getDiaries = async (patientId: string) => {
  const q = query(collection(firestore, 'diary'), where('patientId', '==', patientId));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

export const getSmartwatchStudies = async (patientId: string) => {
  const q = query(collection(firestore, 'smartwatch'), where('patientId', '==', patientId));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};
