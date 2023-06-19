import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import DiaryDetails from '../../organisms/DiaryDetails/DiaryDetails';
import SmartwatchDetails from '../../organisms/SmartwatchDetails/SmartwatchDetails';
import DetailsCardTemplate from '../../templates/DetailsCardTemplate/DetailsCardTemplate';
import * as Styled from './StudyDetailsPage.styled';
import { SleepDiary } from '../../../types/databaseTypes';
import { getDiary } from '../../../firebase/firestoreUtils';

const tempSmartwatch = true;

const StudyDetailsPage = () => {
  const { diaryId } = useParams();
  const [diary, setDiary] = useState<SleepDiary>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (diaryId) {
      try {
        const diaryDoc = await getDiary(diaryId);
        if (diaryDoc.exists()) {
          setDiary(diaryDoc.data() as SleepDiary);
        }
      } catch {
        setError(true);
      }
      setLoading(false);
    }
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
          </Typography>
          <Styled.DetailsBox>
            <Box sx={{ width: '35%' }}>
              {diary ? <DiaryDetails diary={diary} /> : <DetailsCardTemplate type="diary" noData />}
            </Box>
            <Box sx={{ width: '60%' }}>
              {/* zmienić te warunki jak dojdzie backend */}
              {tempSmartwatch ? (
                <SmartwatchDetails smartwatch={tempSmartwatch} />
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
