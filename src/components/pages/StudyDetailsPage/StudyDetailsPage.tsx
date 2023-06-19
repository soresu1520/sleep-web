import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import DiaryDetails from '../../organisms/DiaryDetails/DiaryDetails';
import SmartwatchDetails from '../../organisms/SmartwatchDetails/SmartwatchDetails';
import DetailsCardTemplate from '../../templates/DetailsCardTemplate/DetailsCardTemplate';
import * as Styled from './StudyDetailsPage.styled';
import { SleepDiary, SmartwatchStudy } from '../../../types/databaseTypes';
import { getDiary, getSmartwatchStudy } from '../../../firebase/firestoreUtils';

const StudyDetailsPage = () => {
  const { diaryId, smartwatchId } = useParams();
  const [diary, setDiary] = useState<SleepDiary>();
  const [smartwatchStudy, setSmartwatchStudy] = useState<SmartwatchStudy>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      if (diaryId) {
        const diaryDoc = await getDiary(diaryId);
        if (diaryDoc.exists()) {
          setDiary(diaryDoc.data() as SleepDiary);
        }
      }
      if (smartwatchId) {
        const smartwatchDoc = await getSmartwatchStudy(smartwatchId);
        if (smartwatchDoc.exists()) {
          setSmartwatchStudy(smartwatchDoc.data() as SmartwatchStudy);
        }
      }
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      {loading && (
        <Styled.LoadingBox>
          <CircularProgress sx={{ marginTop: '3rem' }} />
        </Styled.LoadingBox>
      )}
      {!loading && !error && (
        <>
          <Typography variant="h5" color="primary">
            {diary && diary.entryDate}
            {!diary &&
              smartwatchStudy &&
              dayjs(smartwatchStudy.entryDate.toDate().toString()).format('DD.MM.YYYY')}
          </Typography>
          <Styled.DetailsBox>
            <Box sx={{ width: '35%' }}>
              {diary ? <DiaryDetails diary={diary} /> : <DetailsCardTemplate type="diary" noData />}
            </Box>
            <Box sx={{ width: '60%' }}>
              {smartwatchStudy ? (
                <SmartwatchDetails smartwatchStudy={smartwatchStudy} />
              ) : (
                <DetailsCardTemplate type="smartwatch" noData />
              )}
            </Box>
          </Styled.DetailsBox>
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

export default StudyDetailsPage;
