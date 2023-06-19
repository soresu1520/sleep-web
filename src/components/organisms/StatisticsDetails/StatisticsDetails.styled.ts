import { styled } from '@mui/material';
import Box from '@mui/material/Box';

type SubtitleBoxProps = {
  width: string;
};

export const TopBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1rem 0',
  width: '100%',
});

// 32% + 2% to be changed

export const SubtitleBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'width',
})<SubtitleBoxProps>(({ width }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: '0.5rem',
  width,
}));

export const StatisticsBox = styled(Box)({
  alignItems: 'start',
  display: 'flex',
  gap: '2%',
});

export const StatisticsColumn = styled(Box)({
  flexBasis: '32%',
});
