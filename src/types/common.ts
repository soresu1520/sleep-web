import { AddPatientFormValues } from './formTypes';

export type Doctor = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
};

export type Patient = AddPatientFormValues & { doctorId: string; id: string };
