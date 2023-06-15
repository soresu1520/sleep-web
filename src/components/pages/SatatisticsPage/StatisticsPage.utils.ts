import { Dayjs } from 'dayjs';
import { SleepDiary, SmartwatchStudy } from '../../../types/databaseTypes';

type dateJS = Dayjs | null;

const IsDiaryGuard = (list: SleepDiary[] | SmartwatchStudy[]): list is SleepDiary[] =>
  (list as SleepDiary[])[0].dateEntry !== undefined;

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

export default {};
