import { styled } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const FlexGroup = styled(ToggleButtonGroup)({
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '1rem',
  justifyContent: 'center',
  margin: '1rem 0',
});

export default {};
