import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const RowBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',
});

export const LoadingBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const ChartBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
