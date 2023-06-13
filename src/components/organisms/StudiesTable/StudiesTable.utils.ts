import dayjs from 'dayjs';
import routes from '../../../routing/routes';
import { TableData, Order } from './StudiesTable.types';

export const formatDate = (date: Date): string => dayjs(date.toString()).format('DD.MM.YYYY');

export const sortStudies = (list: TableData[], sortOption: Order): TableData[] => {
  switch (sortOption) {
    case 'desc':
      return list.sort((a, b) => formatDate(a.date).localeCompare(formatDate(b.date)));
    case 'asc':
      return list.sort((a, b) => formatDate(b.date).localeCompare(formatDate(a.date)));
    default:
      return list;
  }
};

export const getNewSelectedItems = (
  selectedItems: TableData[],
  newItem: TableData
): TableData[] => {
  const selectedIndex = selectedItems.indexOf(newItem);
  let newSelected: TableData[] = [];

  if (selectedIndex === -1) {
    newSelected = newSelected.concat(selectedItems, newItem);
  } else if (selectedIndex === 0) {
    newSelected = newSelected.concat(selectedItems.slice(1));
  } else if (selectedIndex === selectedItems.length - 1) {
    newSelected.slice(0, -1);
    newSelected = newSelected.concat(selectedItems.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelected = newSelected.concat(
      selectedItems.slice(0, selectedIndex),
      selectedItems.slice(selectedIndex + 1)
    );
  }
  return newSelected;
};

export const isSelected = (selectedItems: TableData[], tableRow: TableData) =>
  selectedItems.indexOf(tableRow) !== -1;

export const getRowsOnPage = (rows: TableData[], page: number, rowsPerPage: number, order: Order) =>
  sortStudies(rows, order).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

export const getStudyUrl = (row: TableData) => {
  if (row.diaryId && row.smartwatchId) {
    return routes.studyDetails
      .replace(':diaryId?', row.diaryId)
      .replace(':smartwatchId?', row.smartwatchId);
  }
  if (row.diaryId) {
    return routes.studyDetails.replace(':diaryId?', row.diaryId).replace(':smartwatchId?', '');
  }
  if (row.smartwatchId) {
    return routes.studyDetails.replace(':smartwatchId?', row.smartwatchId).replace(':diaryId?', '');
  }
  return routes.studyDetails.replace(':smartwatchId?', '').replace(':diaryId?', '');
};
