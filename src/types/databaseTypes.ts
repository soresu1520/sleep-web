import { Timestamp } from 'firebase/firestore';

export type SleepDiary = {
  dateEntry: string;
  id: string;
  patientEmail: string;
  patientId: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  timestamp: Timestamp;
};

export type SmartwatchStudy = {
  date: string;
  id: string;
  patientEmail: string;
  patientId: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  timestamp: Timestamp;
};

export default {};
