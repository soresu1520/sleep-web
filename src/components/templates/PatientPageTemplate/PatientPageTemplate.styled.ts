import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const MainBox = styled(Box)({
  alignItems: 'start',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
});

export const ContentBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export default {};
