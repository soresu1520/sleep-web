import { SleepDiaryStatistics } from './StatisticsDetails.types';

export const diaryParams = {
  sleepTime: 'Średni czas snu',
  sleepBed: 'Średni czas spędzony w łóżku',
  sleepEfficiency: 'Średnia wydajność snu',
  sleepLatency: 'Średni czas zaśnięcia',
  sleepQuality: 'Średnia jakość snu',
};

export const initialDiaryStatistics: SleepDiaryStatistics = {
  sleepTime: '0 h 0 min',
  sleepBed: '0 h 0 min',
  sleepEfficiency: '0%',
  sleepLatency: '0 min',
  sleepQuality: '',
};

export default {};
