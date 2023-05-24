import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import routes from '../../../routing/routes';

const DashboardPage = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const onLogoutClick = async () => {
    await logOut();
    navigate(routes.login);
  };

  return (
    <div>
      <h1>This is dashboard</h1>
      <Button onClick={onLogoutClick}>Log out</Button>
    </div>
  );
};

export default DashboardPage;
