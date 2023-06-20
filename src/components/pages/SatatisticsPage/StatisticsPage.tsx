/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Dayjs } from 'dayjs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { SleepDiary, SmartwatchStudy } from '../../../types/databaseTypes';
import { getDiaries, getSmartwatchStudies } from '../../../firebase/firestoreUtils';
import * as Styled from './StatisticsPage.styled';
import StatisticsDetails from '../../organisms/StatisticsDetails/StatisticsDetails';
import {
  filterStudies,
  getDiaryStatistics,
  getSmartwatchStatistics,
  initialDiaryStatistics,
  initialSmartwatchStatistics,
} from './StatisticsPage.utils';
import { SleepDiaryStatistics } from './StatisticsPage.types';
import StatisticsToggleButtons from '../../molecules/StatisticsToggleButtons/StatisticsToggleButtons';
import { ChartType } from '../../molecules/StatisticsToggleButtons/StatisticsToggleButtons.types';
import StatisticsChart from '../../molecules/StatisticsChart/StatisticsChart';

export const tempAnswers: SleepDiaryStatistics = {
  sleepTime: '7 h 0 min',
  sleepBed: '8 h 0 min',
  sleepEfficiency: '98%',
  sleepLatency: '10 min',
  sleepQuality: 'Przeciętna',
};

const StatisticsPage = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [unfilteredDiary, setUnfilteredDiary] = useState<SleepDiary[]>();
  const [diary, setDiary] = useState<SleepDiary[]>();
  const [unfilteredSmartwatch, setUnfilteredSmartwatch] = useState<SmartwatchStudy[]>();
  const [smartwatch, setSmartwatch] = useState<SmartwatchStudy[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [diaryStatistics, setDiaryStatistics] = useState(initialDiaryStatistics);
  const [smartwatchStatistics, setSmartwatchStatistics] = useState(initialSmartwatchStatistics);
  const [noData, setNoData] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [chartType, setChartType] = useState<ChartType | null>(null);

  const fetchData = async () => {
    if (id) {
      try {
        const diarySnapshots = await getDiaries(id);
        const diaryData = diarySnapshots.docs.map(doc => doc.data() as SleepDiary);
        setUnfilteredDiary(diaryData);
        setDiary(diaryData);

        const smartwatchSnapshots = await getSmartwatchStudies(id);
        const smartwatchData = smartwatchSnapshots.docs.map(doc => doc.data() as SmartwatchStudy);
        setUnfilteredSmartwatch(smartwatchData);
        setSmartwatch(smartwatchData);
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
    let isDiary = false;
    let isSmartwatch = false;

    if (unfilteredDiary) {
      const filteredDiary = filterStudies(unfilteredDiary, startDate, endDate) as SleepDiary[];
      if (filteredDiary.length > 0) {
        setDiary(filteredDiary);
        const diaryStats = getDiaryStatistics(filteredDiary);
        setDiaryStatistics(diaryStats);
        isDiary = true;
      } else {
        setDiaryStatistics(initialDiaryStatistics);
        setDiary([]);
      }
    }
    if (unfilteredSmartwatch) {
      const filteredSmartwach = filterStudies(
        unfilteredSmartwatch,
        startDate,
        endDate
      ) as SmartwatchStudy[];
      if (filteredSmartwach.length > 0) {
        setSmartwatch(filteredSmartwach);
        const smartwatchStats = getSmartwatchStatistics(filteredSmartwach);
        setSmartwatchStatistics(smartwatchStats);
        isSmartwatch = true;
      } else {
        setSmartwatchStatistics(initialSmartwatchStatistics);
        setSmartwatch([]);
      }
    }

    if (!isDiary && !isSmartwatch) {
      setNoData(true);
      setShowChart(false);
    } else {
      setNoData(false);
      setShowChart(true);
    }
  };

  const chooseChartType = (chart: ChartType) => {
    setChartType(chart);
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
          {noData && (
            <Typography variant="h6" color="primary" sx={{ marginTop: '1rem' }} align="center">
              Brak danych z tego okresu
            </Typography>
          )}
          {diary && smartwatch && showChart && (
            <Styled.ChartBox>
              <StatisticsToggleButtons chooseChartType={chooseChartType} />
              {chartType && (
                <StatisticsChart chartType={chartType} diary={diary} smartwatch={smartwatch} />
              )}
            </Styled.ChartBox>
          )}
          <StatisticsDetails
            diaryStatistics={diaryStatistics}
            smartwatchStatistics={smartwatchStatistics}
          />
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
