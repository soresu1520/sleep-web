import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const ActionCard = styled(Card)({
  boxShadow: '0px 3px 6px -2px rgba(0, 0, 0, 0.15)',
  minWidth: '17rem',
});

export const CenteredCardMedia = styled(CardMedia)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '1rem 1rem 0',
});

export const CenteredCardContent = styled(CardContent)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.1rem',
});

export const EllipsisTypography = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
});

export const CardButton = styled(Button)({
  marginTop: '0.5rem',
  width: '75%',
});
