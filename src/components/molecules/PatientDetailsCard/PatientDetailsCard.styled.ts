import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import Box from '@mui/material/Box';

export const DetailsCard = styled(Card)({
  width: '19rem',
});

export const CenteredCardMedia = styled(CardMedia)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: 0,
  paddingTop: '1rem',
});

export const PersonIcon = styled(Person2RoundedIcon)({
  fontSize: '7rem',
});

export const EditBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '0.5rem',
});
