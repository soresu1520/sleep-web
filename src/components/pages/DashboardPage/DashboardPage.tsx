import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import PageTemplate from '../../templates/PageTemplate/PageTemplate';
import routes from '../../../routing/routes';
import PatientsList from '../../organisms/PatientsList/PatientsList';
import { useAuth } from '../../../contexts/authContext';
import { getPatients } from '../../../firebase/firestoreUtils';
import { Patient } from '../../../types/common';
import { sortPatients } from './DashboardPage.utils';

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [unfilteredPatientsList, setUnfilteredPatientsList] = useState([] as Patient[]);
  const [patientsList, setPatientsList] = useState([] as Patient[]);
  const [error, setError] = useState<string>('');

  const fetchPatients = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const snapshots = await getPatients(currentUser!.uid);
      const patientsData = snapshots.docs.map(doc => doc.data() as Patient);
      setUnfilteredPatientsList([...sortPatients(patientsData, 'alphabetDesc')]);
      setPatientsList([...sortPatients(patientsData, 'alphabetDesc')]);
      setLoading(false);
    } catch {
      setError('Wystąpił błąd');
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const changeSortOption = (sortOption: string): void => {
    setUnfilteredPatientsList([...sortPatients(unfilteredPatientsList, sortOption)]);
    setPatientsList([...sortPatients(patientsList, sortOption)]);
  };

  const changeFilterOption = (filterOption: string | null): void => {
    if (filterOption !== null) {
      const filteredPatients = unfilteredPatientsList.filter(patient =>
        `${patient.firstName} ${patient.lastName}`.includes(filterOption)
      );
      setPatientsList(filteredPatients);
    } else {
      setPatientsList(unfilteredPatientsList);
    }
  };

  return (
    <PageTemplate>
      <Typography variant="h4" color="primary">
        Lista pacjentów
      </Typography>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        color="primary"
        size="medium"
        sx={{ margin: '1rem 0' }}
        onClick={() => navigate(routes.addPatient)}
      >
        Dodaj pacjenta
      </Button>
      {loading && <CircularProgress sx={{ marginTop: '3rem' }} />}
      {patientsList && (
        <PatientsList
          patientsList={patientsList}
          changeSortOption={changeSortOption}
          changeFilterOption={changeFilterOption}
        />
      )}
      {error && (
        <Typography variant="h5" color="primary" sx={{ marginTop: '3rem' }}>
          Wystapił błąd
        </Typography>
      )}
    </PageTemplate>
  );
};

export default DashboardPage;
