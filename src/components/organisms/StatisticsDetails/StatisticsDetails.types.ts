import { SleepDiary } from '../../../types/databaseTypes';

export type SleepDiaryStatistics = {
  sleepTime: string;
  sleepBed: string;
  sleepEfficiency: string;
  sleepLatency: string;
  sleepQuality: string;
};

export type StatisticsDetailsProps = {
  sleepDiary: SleepDiary[];
};

export default {};
