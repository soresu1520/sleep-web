import Typography from '@mui/material/Typography';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import * as Styled from './Header.styled';

const Header = () => (
  <nav>
    <Styled.WhiteAppBar position="static">
      <Styled.FlexToolbar isLoggedIn={false}>
        <NightsStayIcon sx={{ fontSize: '2.8rem' }} color="primary" />
        <Typography variant="h4" color="primary">
          Sleep lab
        </Typography>
      </Styled.FlexToolbar>
    </Styled.WhiteAppBar>
  </nav>
);

export default Header;
