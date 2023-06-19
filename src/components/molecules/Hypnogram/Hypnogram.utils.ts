import dayjs from 'dayjs';
import { SleepStage, SleepStageType } from '../../../types/databaseTypes';
import { HexColor, HypnogramPoint } from './Hypnogram.types';

const changeStagesToNumeric = (sleepStage: SleepStageType): number => {
  switch (sleepStage) {
    case '40001':
      return 4;
    case '40002':
      return 2;
    case '40003':
      return 1;
    case '40004':
      return 3;
    default:
      return 4;
  }
};

export const getStagesColors = (sleepStage: SleepStageType): HexColor => {
  switch (sleepStage) {
    case '40001':
      return '#FC6A03';
    case '40004':
      return '#00CCFF';
    case '40002':
      return '#6699CC';
    case '40003':
      return '#041E42';
    default:
      return '#FC6A03';
  }
};

export const generateHypnogramData = (sleepStages: SleepStage[]): number[][] => {
  const hypnogramData: number[][] = [];
  sleepStages.forEach(item => {
    hypnogramData.push([item.startDate.seconds, changeStagesToNumeric(item.stage)]);
  });
  return hypnogramData;
};

export const generateHypnogramPoints = (sleepStages: SleepStage[]) => {
  const hypnogramPoints: HypnogramPoint[] = [];
  sleepStages.forEach(item => {
    hypnogramPoints.push({
      x: item.startDate.seconds,
      y: changeStagesToNumeric(item.stage),
      lineColor: getStagesColors(item.stage),
      color: getStagesColors(item.stage),
    });
  });
  return hypnogramPoints;
};

export const getColors = (value: number): string => {
  switch (value) {
    case 4:
      return '#FC6A03';
    case 3:
      return '#00FFFF';
    case 2:
      return '#1E90FF';
    case 1:
      return '#041E42';
    default:
      return '#FC6A03';
  }
};

export const formatYLabels = (value: number): string => {
  switch (value) {
    case 1:
      return 'Głęboki';
    case 2:
      return 'Lekki';
    case 3:
      return 'REM';
    case 4:
      return 'Czuwanie';
    default:
      return '';
  }
};

export const formatXLabels = (seconds: number): string => {
  const date = new Date(seconds * 1000);
  return dayjs(date).format('HH:mm');
};

export const formatTooltip = (x: number, y: number): string => {
  const hour = formatXLabels(x);
  const stage = formatYLabels(y);
  return `${hour}, ${stage}`;
};
