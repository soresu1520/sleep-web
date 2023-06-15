import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Dayjs } from 'dayjs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { SleepDiary } from '../../../types/databaseTypes';
import { getDiaries } from '../../../firebase/firestoreUtils';
import * as Styled from './StatisticsPage.styled';
import StatisticsDetails from '../../organisms/StatisticsDetails/StatisticsDetails';
import { filterStudies } from './StatisticsPage.utils';

const StatisticsPage = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [unfilteredDiary, setUnfilteredDiary] = useState<SleepDiary[]>();
  const [diary, setDiary] = useState<SleepDiary[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (id) {
      try {
        const diarySnapshots = await getDiaries(id);
        const diaryData = diarySnapshots.docs.map(doc => doc.data() as SleepDiary);
        setUnfilteredDiary(diaryData);
        setDiary(diaryData);
      } catch {
        setError(true);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onFilterClick = () => {
    if (unfilteredDiary) {
      setDiary(filterStudies(unfilteredDiary, startDate, endDate) as SleepDiary[]);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" color="primary">
        Statystyki
      </Typography>
      {loading && (
        <Styled.LoadingBox>
          <CircularProgress sx={{ marginTop: '3rem' }} />
        </Styled.LoadingBox>
      )}
      {!loading && !error && (
        <>
          <Styled.RowBox>
            <DatePicker
              label="Od"
              disableFuture
              value={startDate}
              onChange={newValue => setStartDate(newValue)}
              sx={{ width: '15rem' }}
            />
            <DatePicker
              label="Do"
              disableFuture
              value={endDate}
              onChange={newValue => setEndDate(newValue)}
              sx={{ width: '15rem' }}
            />
            <Button onClick={onFilterClick}>Pokaż statystyki</Button>
          </Styled.RowBox>
          <div style={{ border: '1px solid red', marginTop: '2rem' }}>chart</div>
          <StatisticsDetails />
        </>
      )}
      {error && (
        <Typography variant="h5" color="primary" sx={{ marginTop: '3rem' }} align="center">
          Wystapił błąd
        </Typography>
      )}
    </Box>
  );
};

export default StatisticsPage;
