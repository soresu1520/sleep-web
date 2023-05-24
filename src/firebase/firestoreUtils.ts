import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from './firebaseConfig';

export const checkIfDoctor = async (email: string) => {
  const q = query(collection(firestore, 'doctors'), where('email', '==', email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};

export default {};
