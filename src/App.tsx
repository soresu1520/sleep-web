import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header/Header';
import Footer from './components/atoms/Footer/Footer';
import LoginPage from './components/pages/LoginPage/LoginPage';
import DashboardPage from './components/pages/DashboardPage/DashboardPage';
import routes from './routing/routes';
import PrivateRoutes from './routing/PrivateRoutes';

const App = () => (
  <CssBaseline>
    <Header />
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path={routes.dashboard} element={<DashboardPage />} />
      </Route>
      <Route path={routes.login} element={<LoginPage />} />
    </Routes>
    <Footer />
  </CssBaseline>
);

export default App;
