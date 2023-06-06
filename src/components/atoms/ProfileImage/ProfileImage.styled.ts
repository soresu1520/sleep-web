import { styled } from '@mui/material';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

type PersonIconProps = {
  size: number;
};

export const PersonIcon = styled(Person2RoundedIcon, {
  shouldForwardProp: prop => prop !== 'size',
})<PersonIconProps>(({ theme, size }) => ({
  borderRadius: '50%',
  background: `${theme.palette.secondary.main}20`,
  fontSize: `${size}rem`,
  padding: '0.5rem',
}));

export default PersonIcon;
