import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import Person2Icon from '@mui/icons-material/Person2';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const ActionCard = styled(Card)({
  minWidth: '20rem',
});

export const CenteredCardMedia = styled(CardMedia)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '1rem 1rem 0',
});

export const BorderPersonIcon = styled(Person2RoundedIcon)(({ theme }) => ({
  borderRadius: '50%',
  background: `${theme.palette.secondary.main}20`,
  fontSize: '7rem',
  padding: '0.5rem',
}));

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
