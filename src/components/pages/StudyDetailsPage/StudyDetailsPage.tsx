import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DiaryDetails from '../../organisms/DiaryDetails/DiaryDetails';
import SmartwatchDetails from '../../organisms/SmartwatchDetails/SmartwatchDetails';
import DetailsCardTemplate from '../../templates/DetailsCardTemplate/DetailsCardTemplate';
import * as Styled from './StudyDetailsPage.styled';

const tempDiary = {
  q1: 'Tak',
  q2: '23:00',
  q3: '23:15',
  q4: '15',
  q5: '06:30',
  q6: 'Nie',
  q7: '07:00',
  q8: 'Dobra',
  q9: '',
};

const tempSmartwatch = true;

const StudyDetailsPage = () => (
  <Box sx={{ width: '100%' }}>
    <Typography variant="h5" color="primary">
      11.06.2023
    </Typography>
    <Styled.DetailsBox>
      <Box sx={{ width: '35%' }}>
        {tempDiary ? (
          <DiaryDetails diary={tempDiary} />
        ) : (
          <DetailsCardTemplate type="diary" noData />
        )}
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
  </Box>
);

export default StudyDetailsPage;
