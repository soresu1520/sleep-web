/* eslint-disable arrow-body-style */
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import PageTemplate from '../../templates/PageTemplate/PageTemplate';
import routes from '../../../routing/routes';
import PatientCard from '../../molecules/PatientCard/PatientCard';

const DashboardPage = () => {
  const navigate = useNavigate();

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
      <PatientCard />
    </PageTemplate>
  );
};

export default DashboardPage;
