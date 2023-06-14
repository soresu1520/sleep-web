import dayjs from 'dayjs';

export const addMinutes = (time: string, minutes: number): string => {
  const dateTime = new Date(`1970-01-01T${time}`);
  dateTime.setMinutes(dateTime.getMinutes() + +minutes);
  const newTime = dayjs(dateTime.toString()).format('HH:mm');
  return newTime;
};

export const calculateDiaryTimeDiff = (time1: string, time2: string): number => {
  const dateTime1 = new Date(`1970-01-01T${time1}`);
  const dateTime2 = new Date(`1970-01-01T${time2}`);
  const diff = (dateTime2.getTime() - dateTime1.getTime()) / (1000 * 60);
  if (diff < 0) {
    return 60 * 24 + diff;
  }
  return diff;
};

export const getDiaryTimeDiff = (time1: string, time2: string): string => {
  const diff = calculateDiaryTimeDiff(time1, time2);
  const hours = Math.round(diff / 60);
  const minutes = diff - 60 * hours;
  return `${hours} h ${minutes} min`;
};

export const calculateDiarySleepEfficiency = (
  startBedHour: string,
  sleepHour: string,
  wakeHour: string,
  endBedHour: string
): number => {
  const sleepMinutes = calculateDiaryTimeDiff(sleepHour, wakeHour);
  const bedMinutes = calculateDiaryTimeDiff(startBedHour, endBedHour);
  return Math.round((sleepMinutes / bedMinutes) * 100);
};
