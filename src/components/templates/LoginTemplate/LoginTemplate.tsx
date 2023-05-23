import { PropsWithChildren } from 'react';
import Link from '@mui/material/Link';
import graphic from '../../../assets/vecteezy_a-man-in-pajamas-is-having-a-sweet-dream-in-the-bedroom_5611444.jpg';
import * as Styled from './LoginTemplate.styled';

const LoginTemplate = ({ children }: PropsWithChildren) => (
  <Styled.MainBox>
    <Styled.LoginBox>
      <Styled.ImageBox>
        <img src={graphic} alt="A man in a bed" width={450} />
        <Link href="https://www.vecteezy.com/free-vector/sleep" underline="none" color="secondary">
          Grafika od Vecteezy
        </Link>
      </Styled.ImageBox>
      {children}
    </Styled.LoginBox>
  </Styled.MainBox>
);

export default LoginTemplate;
