import { AddPatientFormValues } from './formTypes';

export type Doctor = {
  firstName: string;
  lastName: string;
  email: string;
};

export type Patient = AddPatientFormValues & { doctorId: string };

export type PatientWithId = Patient & { id: string };
