import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import Person2Icon from '@mui/icons-material/Person2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type PatientCardProps = {
  name: string;
  age: number;
  diagnosis: string;
};

const PatientCard = () => (
  <Card variant="outlined" sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia component="div">
        <Person2Icon color="secondary" sx={{ fontSize: '10rem' }} />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default PatientCard;
