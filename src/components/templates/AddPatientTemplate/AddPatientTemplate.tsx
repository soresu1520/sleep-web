import { PropsWithChildren } from 'react';
import * as Styled from './AddPatientTemplate.styled';

const AddPatientTemplate = ({ children }: PropsWithChildren) => (
  <Styled.MainBox>{children}</Styled.MainBox>
);

export default AddPatientTemplate;
