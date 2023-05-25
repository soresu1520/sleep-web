import { Typography } from '@mui/material';
import * as Styled from './Footer.styled';

const Footer = () => (
  <Styled.FooterBox>
    <Styled.CopyrightBox>
      <Typography>@ Roksana Rachel {new Date().getFullYear()}</Typography>
    </Styled.CopyrightBox>
  </Styled.FooterBox>
);

export default Footer;
