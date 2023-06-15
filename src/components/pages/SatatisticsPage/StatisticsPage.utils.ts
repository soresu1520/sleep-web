import { SleepDiary, SmartwatchStudy } from '../../../types/databaseTypes';
import { calculateDiaryTimeDiff, addMinutes, getDiffHoursMinutes } from '../../../utils/diaryStats';
import { SleepDiaryStatistics, dateJS, IsDiaryGuard, SleepQuality } from './StatisticsPage.types';

export const initialDiaryStatistics: SleepDiaryStatistics = {
  sleepTime: '-',
  sleepBed: '-',
  sleepEfficiency: '-',
  sleepLatency: '-',
  sleepQuality: '-',
};

export const filterStudies = (
  studies: SleepDiary[] | SmartwatchStudy[],
  startDate: dateJS,
  endDate: dateJS
): SleepDiary[] | SmartwatchStudy[] => {
  if (startDate && endDate) {
    if (IsDiaryGuard(studies)) {
      return studies.filter(
        item =>
          item.timestamp.toDate() >= startDate.toDate() &&
          item.timestamp.toDate() <= endDate.toDate()
      );
    }
    return studies.filter(
      item =>
        item.timestamp.toDate() >= startDate.toDate() && item.timestamp.toDate() <= endDate.toDate()
    );
  }
  if (startDate) {
    if (IsDiaryGuard(studies)) {
      return studies.filter(item => item.timestamp.toDate() >= startDate.toDate());
    }
    return studies.filter(item => item.timestamp.toDate() >= startDate.toDate());
  }
  if (endDate) {
    if (IsDiaryGuard(studies)) {
      return studies.filter(item => item.timestamp.toDate() <= endDate.toDate());
    }
    return studies.filter(item => item.timestamp.toDate() <= endDate.toDate());
  }
  return studies;
};

const switchQualityToNumber = (quality: SleepQuality): number => {
  switch (quality) {
    case 'Bardzo zła':
      return 1;
    case 'Zła':
      return 2;
    case 'Przeciętna':
      return 3;
    case 'Dobra':
      return 4;
    case 'Bardzo dobra':
      return 5;
    default:
      return 0;
  }
};

const switchQualityToString = (quality: number): SleepQuality => {
  switch (quality) {
    case 1:
      return 'Bardzo zła';
    case 2:
      return 'Zła';
    case 3:
      return 'Przeciętna';
    case 4:
      return 'Dobra';
    case 5:
      return 'Bardzo dobra';
    default:
      return 'Przeciętna';
  }
};

export const getDiaryStatistics = (diary: SleepDiary[]): SleepDiaryStatistics => {
  let sleepTime = 0;
  let sleepBed = 0;
  let sleepLatency = 0;
  let sleepQuality = 0;

  diary.forEach(item => {
    sleepTime += calculateDiaryTimeDiff(addMinutes(item.q3, +item.q4), item.q5);
    sleepBed += calculateDiaryTimeDiff(item.q2, item.q7);
    sleepLatency += +item.q4;
    sleepQuality += switchQualityToNumber(item.q8 as SleepQuality);
  });

  const sleepTimeMean = getDiffHoursMinutes(sleepTime / diary.length);
  const bedTimeMean = getDiffHoursMinutes(sleepBed / diary.length);
  const sleepEfficiencyMean = Math.round((sleepTime / 7 / (sleepBed / 7)) * 100);
  const sleepLatencyMean = Math.round(sleepLatency / 7);
  const sleepQualityMean = Math.round(sleepQuality / 7);

  const stats: SleepDiaryStatistics = {
    sleepTime: sleepTimeMean,
    sleepBed: bedTimeMean,
    sleepEfficiency: `${sleepEfficiencyMean}%`,
    sleepLatency: `${sleepLatencyMean} min`,
    sleepQuality: switchQualityToString(sleepQualityMean),
  };
  return stats;
};
