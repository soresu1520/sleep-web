import Typography from '@mui/material/Typography';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Header.styled';
import { useAuth } from '../../../contexts/authContext';
import AccountDropdown from '../../molecules/AccountDropdown/AccountDropdown';
import routes from '../../../routing/routes';

const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <nav>
      <Styled.WhiteAppBar position="sticky">
        <Styled.FlexToolbar isLoggedIn={!!currentUser}>
          <Styled.LogoBox onClick={() => navigate(currentUser ? routes.dashboard : routes.login)}>
            <NightsStayIcon sx={{ fontSize: '2.8rem' }} color="primary" />
            <Typography variant="h4" color="primary">
              Sleep Lab
            </Typography>
          </Styled.LogoBox>
          {currentUser ? <AccountDropdown /> : null}
        </Styled.FlexToolbar>
      </Styled.WhiteAppBar>
    </nav>
  );
};

export default Header;
