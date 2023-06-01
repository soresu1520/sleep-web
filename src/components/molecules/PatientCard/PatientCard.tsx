import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import * as Styled from './PatientCard.styled';
import calculateAge from './PatientCard.utils';

type PatientCardProps = {
  id: string;
  name: string;
  dateOfBirth: Date;
  diagnosis: string;
};

// cant have card action, do your own
const PatientCard = ({ id, name, dateOfBirth, diagnosis }: PatientCardProps) => (
  <Card sx={{ width: 320 }}>
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
      <Tooltip title={diagnosis}>
        <Styled.EllipsisTypography variant="body2" color="text.secondary" textAlign="center">
          {diagnosis}
        </Styled.EllipsisTypography>
      </Tooltip>
      <Button sx={{ marginTop: '0.5rem', width: '75%' }}>Szczegóły</Button>
    </Styled.CenteredCardContent>
  </Card>
);

export default PatientCard;
