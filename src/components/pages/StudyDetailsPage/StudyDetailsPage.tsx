import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DiaryDetails from '../../organisms/DiaryDetails/DiaryDetails';

const StudyDetailsPage = () => (
  <Box sx={{ width: '100%' }}>
    <Typography variant="h5" color="primary">
      11.06.2023
    </Typography>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '1rem',
      }}
    >
      <div style={{ border: '1px solid red', width: '35%', height: '400px' }}>
        <DiaryDetails />
      </div>
      <div style={{ border: '1px solid red', width: '60%' }}>test 2</div>
    </div>
  </Box>
);

export default StudyDetailsPage;
