import { SleepDiary } from '../../../types/databaseTypes';

export type ChartType =
  | 'sleepTime'
  | 'diarySleepTime'
  | 'sleepEfficiency'
  | 'diarySleepEfficiency'
  | 'latency'
  | 'saturation'
  | 'desaturation'
  | 'waso'
  | 'sleepQuality';

export type StatisticsToggleButtonsProps = {
  chooseChartType: (chart: ChartType) => void;
};
