import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const RegisterBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1.5rem',
  width: '30rem',
});

export const FormBox = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
});

export const FormRow = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

export default {};
