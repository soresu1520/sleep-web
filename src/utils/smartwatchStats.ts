import { SleepStage, SleepStageType } from '../types/databaseTypes';

export const parseDesaturationTime = (desTime: number): string => {
  const min = Math.floor(desTime / 60);
  const sec = desTime - 60 * min;
  return `${min} min ${sec} s`;
};

export const countWakes = (sleep: SleepStage[]): number => {
  let wakes = 0;
  sleep.forEach(item => {
    if (item.stage === '40001') {
      wakes += 1;
    }
  });
  return wakes;
};

export const calculateSleepTime = (sleep: SleepStage[]): number => {
  let duration = 0;
  sleep.forEach(item => {
    if (item.stage !== '40001') {
      duration += item.duration;
    }
  });
  return duration;
};

export const calculateStageTime = (sleep: SleepStage[], stage: SleepStageType): number => {
  let duration = 0;
  sleep.forEach(item => {
    if (item.stage === stage) {
      duration += item.duration;
    }
  });
  return duration;
};

export const calculateSmartwatchSleepEfficiency = (sleep: SleepStage[]): number => {
  const sleepTime = calculateSleepTime(sleep);
  const wakeTime = calculateStageTime(sleep, '40001');
  const totalTime = sleepTime + wakeTime;
  return Math.round((sleepTime / totalTime) * 100);
};

export const calculateREMLatency = (sleep: SleepStage[]): number => {
  let remLatency = 0;
  let i = 0;
  while (sleep[i].stage !== '40004') {
    remLatency += sleep[i].duration;
    i += 1;
  }
  return remLatency;
};

export const calculateWASO = (sleep: SleepStage[]): number => {
  const sleepCopy = [...sleep];
  sleepCopy.pop();
  return calculateStageTime(sleepCopy, '40001');
};
