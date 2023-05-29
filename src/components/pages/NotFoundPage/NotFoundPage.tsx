import Typography from '@mui/material/Typography';
import * as Styled from './NotFoundPage.styled';
import Link from '../../atoms/Link/Link';
import routes from '../../../routing/routes';

const NotFoundPage = () => (
  <Styled.MainBox>
    <Styled.ContentBox>
      <Typography variant="h3" color="primary">
        Nie znaleziono strony
      </Typography>
      <Link to={routes.dashboard}>Wróć do strony głównej</Link>
    </Styled.ContentBox>
  </Styled.MainBox>
);

export default NotFoundPage;
