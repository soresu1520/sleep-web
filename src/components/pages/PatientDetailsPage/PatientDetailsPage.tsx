import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import StudiesTable from '../../organisms/StudiesTable/StudiesTable';
import * as Styled from './PatientDetailsPage.styled';
import { TableData } from '../../organisms/StudiesTable/StudiesTable.types';
import { getDiaries, getSmartwatchStudies } from '../../../firebase/firestoreUtils';
import {
  filterByDate,
  mapDiaryDocuments,
  mapSmartwatchDocuments,
  createTableData,
  filterDeletedData,
} from './PatientDetailsPage.utils';
import routes from '../../../routing/routes';

const PatientDetailsPage = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [tableData, setTableData] = useState<TableData[]>();
  const [filteredTableData, setFilteredTableData] = useState<TableData[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchSmartwatchStudies = async () => {
    try {
      if (id) {
        const diarySnapshots = await getDiaries(id);
        const diaryData = diarySnapshots.docs.map(mapDiaryDocuments);

        const smartwatchSnapshots = await getSmartwatchStudies(id);
        const smartwatchData = smartwatchSnapshots.docs.map(mapSmartwatchDocuments);

        const data = createTableData(diaryData, smartwatchData);
        setTableData(data);
        setFilteredTableData(data);
      }
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSmartwatchStudies();
  }, []);

  const onFilterClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const filteredData = filterByDate(tableData!, startDate, endDate);
    setFilteredTableData(filteredData);
  };

  const onClearClick = () => {
    setFilteredTableData(tableData);
    setStartDate(null);
    setEndDate(null);
  };

  const handleDelete = (selected: TableData[]) => {
    const newData = filterDeletedData(tableData!, selected);
    const newUnfilteredData = filterDeletedData(filteredTableData!, selected);
    setFilteredTableData(newData);
    setTableData(newUnfilteredData);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" color="primary">
        Lista badań
      </Typography>
      {loading && (
        <Styled.FallbackBox>
          <CircularProgress />
        </Styled.FallbackBox>
      )}
      {filteredTableData && tableData && (
        <>
          <Styled.ActionRow>
            <Styled.FilterBox>
              <DatePicker
                label="Od"
                disableFuture
                value={startDate}
                onChange={newValue => setStartDate(newValue)}
                sx={{ width: '12rem' }}
              />
              <DatePicker
                label="Do"
                disableFuture
                value={endDate}
                onChange={newValue => setEndDate(newValue)}
                sx={{ width: '12rem' }}
              />
              <Button onClick={onFilterClick}>Filtruj</Button>
              {tableData.length > filteredTableData.length && (
                <Button variant="outlined" onClick={onClearClick}>
                  Wyczyść filtry
                </Button>
              )}
            </Styled.FilterBox>
            <Button onClick={() => navigate(routes.statistics)}>Statystyki</Button>
          </Styled.ActionRow>
          <StudiesTable tableData={filteredTableData} handleDelete={handleDelete} />
        </>
      )}
      {error && (
        <Styled.FallbackBox>
          <Typography variant="h5" color="primary">
            Wystapił błąd
          </Typography>
        </Styled.FallbackBox>
      )}
    </Box>
  );
};

export default PatientDetailsPage;
