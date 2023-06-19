import { Timestamp } from 'firebase/firestore';

export type SleepDiary = {
  entryDate: string;
  id: string;
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

export type SleepStageType = '40001' | '40002' | '40003' | '40004';

export type SleepStage = {
  duration: number;
  startDate: Timestamp;
  endDate: Timestamp;
  stage: SleepStageType;
};

export type SmartwatchStudy = {
  entryDate: Timestamp;
  id: string;
  patientId: string;
  minSaturation: number;
  meanSaturation: number;
  maxSaturation: number;
  desaturationTime: number;
  sleepStages: SleepStage[];
};
