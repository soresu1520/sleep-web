import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const ActionRow = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '1rem 0',
  width: '100%',
});

export const FilterBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

export const FallbackBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3rem',
});
