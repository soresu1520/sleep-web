import dayjs from 'dayjs';
import { ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { SleepDiary, SmartwatchStudy } from '../../../types/databaseTypes';
import { DataPoint } from './StatisticsChart.types';
import { ChartType } from '../StatisticsToggleButtons/StatisticsToggleButtons.types';
import {
  calculateSleepTime,
  calculateSmartwatchSleepEfficiency,
  calculateWASO,
  parseDesaturationTime,
} from '../../../utils/smartwatchStats';
import {
  addMinutes,
  calculateDiarySleepEfficiency,
  calculateDiaryTimeDiff,
  getDiffHoursMinutes,
} from '../../../utils/diaryStats';
import {
  switchQualityToNumber,
  switchQualityToString,
} from '../../pages/SatatisticsPage/StatisticsPage.utils';
import { SleepQuality } from '../../pages/SatatisticsPage/StatisticsPage.types';

export const getSmartwatchValue = (
  smartwatchItem: SmartwatchStudy,
  chartType: ChartType
): number => {
  switch (chartType) {
    case 'sleepTime':
      return calculateSleepTime(smartwatchItem.sleepStages);
    case 'sleepEfficiency':
      return calculateSmartwatchSleepEfficiency(smartwatchItem.sleepStages);
    case 'waso':
      return calculateWASO(smartwatchItem.sleepStages);
    case 'saturation':
      return smartwatchItem.meanSaturation;
    case 'desaturation':
      return smartwatchItem.desaturationTime;
    default:
      return 0;
  }
};

const getDiaryValue = (diaryItem: SleepDiary, chartType: ChartType) => {
  switch (chartType) {
    case 'diarySleepTime':
      return calculateDiaryTimeDiff(addMinutes(diaryItem.q3, +diaryItem.q4), diaryItem.q5);
    case 'diarySleepEfficiency':
      return calculateDiarySleepEfficiency(
        diaryItem.q2,
        addMinutes(diaryItem.q3, +diaryItem.q4),
        diaryItem.q5,
        diaryItem.q7
      );
    case 'latency':
      return +diaryItem.q4;
    case 'sleepQuality':
      return switchQualityToNumber(diaryItem.q8 as SleepQuality);
    default:
      return 0;
  }
};

export const getData = (
  diary: SleepDiary[],
  smartwatch: SmartwatchStudy[],
  chartType: ChartType
): DataPoint[] => {
  const data: DataPoint[] = [];
  if (
    chartType === 'diarySleepEfficiency' ||
    chartType === 'diarySleepTime' ||
    chartType === 'latency' ||
    chartType === 'sleepQuality'
  ) {
    diary.sort((a, b) => a.timestamp.seconds - b.timestamp.seconds);
    diary.forEach(item => {
      data.push({
        name: dayjs(item.timestamp.toDate()).format('DD.MM'),
        value: getDiaryValue(item, chartType),
      });
    });
  } else {
    smartwatch.sort((a, b) => a.entryDate.seconds - b.entryDate.seconds);
    smartwatch.forEach(item => {
      data.push({
        name: dayjs(item.entryDate.toDate()).format('DD.MM'),
        value: getSmartwatchValue(item, chartType),
      });
    });
  }
  return data;
};

export const formatValue = (value: ValueType | undefined, chartType: ChartType): string => {
  switch (chartType) {
    case 'sleepTime':
    case 'diarySleepTime':
    case 'waso':
      return getDiffHoursMinutes(value as number);
    case 'saturation':
    case 'sleepEfficiency':
    case 'diarySleepEfficiency':
      return `${value}%`;
    case 'latency':
      return `${value} min`;
    case 'desaturation':
      return parseDesaturationTime(value as number);
    case 'sleepQuality':
      return switchQualityToString(value as number);
    default:
      return `${value}`;
  }
};

export const formatYLabel = (value: ValueType | undefined, chartType: ChartType): string => {
  switch (chartType) {
    case 'sleepTime':
    case 'diarySleepTime':
    case 'waso':
      return `${Math.round((value as number) / 60)} h`;
    case 'saturation':
    case 'sleepEfficiency':
    case 'diarySleepEfficiency':
      return `${value}%`;
    case 'desaturation':
      return `${Math.round((value as number) / 60)} min`;
    default:
      return `${value}`;
  }
};
