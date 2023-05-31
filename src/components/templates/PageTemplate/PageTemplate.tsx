import { PropsWithChildren } from 'react';
import * as Styled from './PageTemplate.styled';

const PageTemplate = ({ children }: PropsWithChildren) => (
  <Styled.PageBox>{children}</Styled.PageBox>
);

export default PageTemplate;
