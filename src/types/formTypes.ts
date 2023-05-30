import { Timestamp } from 'firebase/firestore';

export type LoginFormValues = {
  email: string;
  password: string;
};

export type ResetFormValues = {
  email: string;
};

export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export type ChangePasswordFormValues = {
  password: string;
  repeatPassword: string;
};

export type AddPatientFormValues = {
  firstName: string;
  lastName: string;
  pesel: string;
  phone: string;
  birthDate: Timestamp;
  email: string;
  diagnosis: string;
  notes: string;
};
