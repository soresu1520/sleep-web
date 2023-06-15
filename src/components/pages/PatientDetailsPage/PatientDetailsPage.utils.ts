import { Dayjs } from 'dayjs';
import { DocumentData } from 'firebase/firestore';
import { TableData } from '../../organisms/StudiesTable/StudiesTable.types';

type dateJS = Dayjs | null;

export const filterByDate = (
  tableData: TableData[],
  startDate: dateJS,
  endDate: dateJS
): TableData[] => {
  if (startDate && endDate) {
    return tableData.filter(
      item => item.date >= startDate.toDate() && item.date <= endDate.toDate()
    );
  }
  if (startDate) {
    return tableData.filter(item => item.date >= startDate.toDate());
  }
  if (endDate) {
    return tableData.filter(item => item.date <= endDate.toDate());
  }
  return tableData;
};

export const mapDiaryDocuments = (doc: DocumentData): TableData => {
  const item: TableData = {
    diaryId: doc.data().id,
    diary: true,
    date: doc.data().timestamp.toDate(),
    smartwatch: false,
  };
  return item;
};

export const mapSmartwatchDocuments = (doc: DocumentData): TableData => {
  const item: TableData = {
    smartwatchId: doc.data().id,
    diary: false,
    date: doc.data().date.toDate(),
    smartwatch: true,
  };
  return item;
};

export const createTableData = (
  diaryData: TableData[],
  smartwatchData: TableData[]
): TableData[] => {
  const data = diaryData;
  smartwatchData.forEach(item => {
    const diaryIndex = data.findIndex(item2 => item2.date.toString() === item.date.toString());
    if (diaryIndex > -1) {
      data[diaryIndex].smartwatch = true;
      data[diaryIndex].smartwatchId = item.smartwatchId;
    } else {
      data.push(item);
    }
  });
  return data;
};
