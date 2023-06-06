import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import PageTemplate from '../PageTemplate/PageTemplate';
import * as Styled from './PatientPageTemplate.styled';
import PatientDetailsCard from '../../molecules/PatientDetailsCard/PatientDetailsCard';
import { getPatient } from '../../../firebase/firestoreUtils';
import { Patient } from '../../../types/common';

const PatientPageTemplate = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState({} as Patient);

  const fetchPatient = async () => {
    try {
      if (id) {
        const doc = await getPatient(id);
        if (doc.exists()) {
          setPatient(doc.data() as Patient);
        }
      }
      // eslint-disable-next-line no-empty
    } catch {}
  };

  useEffect(() => {
    fetchPatient();
  }, []);

  return (
    <PageTemplate>
      <Styled.MainBox>
        <PatientDetailsCard patient={patient} />
        <Styled.ContentBox>
          <Outlet />
        </Styled.ContentBox>
      </Styled.MainBox>
    </PageTemplate>
  );
};

export default PatientPageTemplate;
