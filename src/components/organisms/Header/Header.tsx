import Typography from '@mui/material/Typography';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import * as Styled from './Header.styled';
import { useAuth } from '../../../contexts/authContext';

const Header = () => {
  const { currentUser } = useAuth();

  return (
    <nav>
      <Styled.WhiteAppBar position="static">
        <Styled.FlexToolbar isLoggedIn={!!currentUser}>
          <NightsStayIcon sx={{ fontSize: '2.8rem' }} color="primary" />
          <Typography variant="h4" color="primary">
            Sleep lab
          </Typography>
        </Styled.FlexToolbar>
      </Styled.WhiteAppBar>
    </nav>
  );
};

export default Header;
