import { Dayjs } from 'dayjs';
import { SleepDiary, SmartwatchStudy } from '../../../types/databaseTypes';

export type SleepDiaryStatistics = {
  sleepTime: string;
  sleepBed: string;
  sleepEfficiency: string;
  sleepLatency: string;
  sleepQuality: string;
};

export type dateJS = Dayjs | null;

export const IsDiaryGuard = (list: SleepDiary[] | SmartwatchStudy[]): list is SleepDiary[] =>
  (list as SleepDiary[])[0].dateEntry !== undefined;

export type SleepQuality = 'Bardzo zła' | 'Zła' | 'Przeciętna' | 'Dobra' | 'Bardzo dobra';
