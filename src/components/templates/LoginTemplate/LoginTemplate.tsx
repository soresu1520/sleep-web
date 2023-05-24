import { PropsWithChildren } from 'react';
import Link from '@mui/material/Link';
import graphic from '../../../assets/vecteezy_a-man-in-pajamas-is-having-a-sweet-dream-in-the-bedroom_5611444.jpg';
import * as Styled from './LoginTemplate.styled';

const LoginTemplate = ({ children }: PropsWithChildren) => (
  <Styled.MainBox>
    <Styled.ContentBox>
      <Styled.ImageBox>
        <Styled.Image src={graphic} alt="A man in a bed" />
        <Link href="https://www.vecteezy.com/free-vector/sleep" underline="none" color="secondary">
          Grafika od Vecteezy
        </Link>
      </Styled.ImageBox>
      {children}
    </Styled.ContentBox>
  </Styled.MainBox>
);

export default LoginTemplate;
