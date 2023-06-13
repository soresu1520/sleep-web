export type TableData = {
  diaryId?: string;
  smartwatchId?: string;
  date: Date;
  diary: boolean;
  smartwatch: boolean;
};

export type StudiesTableProps = {
  tableData: TableData[];
};

export type Order = 'asc' | 'desc';
