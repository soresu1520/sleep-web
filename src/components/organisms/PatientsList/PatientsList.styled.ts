import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const ContentBox = styled(Box)({
  width: '100%',
});

export const SortSearchBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
});

export const ListBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  rowGap: '2rem',
});
