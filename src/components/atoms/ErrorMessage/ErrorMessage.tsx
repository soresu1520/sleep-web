import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Typography } from '@mui/material';
import * as Styled from './ErrorMessage.styled';

const ErrorMessage = ({ msg }: { msg: string }) => (
  <Styled.ErrorBox>
    <ErrorOutlineIcon color="error" />
    <Typography color="error" paragraph sx={{ margin: 0 }}>
      {msg}
    </Typography>
  </Styled.ErrorBox>
);

export default ErrorMessage;
