import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import * as Styled from './PatientCard.styled';
import calculateAge from './PatientCard.utils';
import routes from '../../../routing/routes';

type PatientCardProps = {
  id: string;
  name: string;
  dateOfBirth: Date;
  diagnosis: string;
};

const PatientCard = ({ id, name, dateOfBirth, diagnosis }: PatientCardProps) => {
  const navigate = useNavigate();

  const navigateToPatientDetails = (patientId: string) => {
    const url = routes.patientDetails.replace(':id', patientId);
    navigate(url);
  };

  return (
    <Styled.ActionCard>
      <Styled.CenteredCardMedia>
        <Styled.BorderPersonIcon color="secondary" />
      </Styled.CenteredCardMedia>
      <Styled.CenteredCardContent>
        <Typography variant="h5" color="primary" textAlign="center">
          {name}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {calculateAge(dateOfBirth)} lat
        </Typography>
        <Tooltip title={diagnosis} placement="top">
          <Styled.EllipsisTypography variant="body2" color="text.secondary" textAlign="center">
            {diagnosis}
          </Styled.EllipsisTypography>
        </Tooltip>
        <Styled.CardButton onClick={() => navigateToPatientDetails(id)}>
          Szczegóły
        </Styled.CardButton>
      </Styled.CenteredCardContent>
    </Styled.ActionCard>
  );
};

export default PatientCard;
