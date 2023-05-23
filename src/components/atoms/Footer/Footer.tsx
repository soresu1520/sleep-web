import { Typography } from '@mui/material';
import * as Styled from './Footer.styled';

const Footer = () => (
  <footer>
    <Styled.FooterBox>
      <Typography>@ Roksana Rachel {new Date().getFullYear()}</Typography>
    </Styled.FooterBox>
  </footer>
);

export default Footer;
