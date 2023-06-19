import { Dayjs } from 'dayjs';
import { SleepDiary, SmartwatchStudy } from '../../../types/databaseTypes';

export type SleepDiaryStatistics = {
  sleepTime: string;
  sleepBed: string;
  sleepEfficiency: string;
  sleepLatency: string;
  sleepQuality: string;
};

export type SmartwatchStudyStatistics = {
  sleepTime: string;
  wakeTime: string;
  lightSleepTime: string;
  deepSleepTime: string;
  remSleepTime: string;
  remLatency: string;
  waso: string;
  wakes: string;
  sleepEfficiency: string;
  saturation: string;
  desaturationTime: string;
};

export type dateJS = Dayjs | null;

export const IsDiaryGuard = (list: SleepDiary[] | SmartwatchStudy[]): list is SleepDiary[] =>
  (list as SleepDiary[])[0].q1 !== undefined;

export type SleepQuality = 'Bardzo zła' | 'Zła' | 'Przeciętna' | 'Dobra' | 'Bardzo dobra';
