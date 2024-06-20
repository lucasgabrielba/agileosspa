import { Navigate, createBrowserRouter } from 'react-router-dom';
// import { AppTemplate } from './pages/AppTemplate';
// import { FeatureWrapper } from './components/common/FeatureWrapper';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import { FeatureWrapper } from './components/common/FeatureWrapper';
import { AppTemplate } from './pages/AppTemplate';


export const appRoutes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <AppTemplate />,
    children: [
      {
        path: '/',
        index: true,
        element: (
          <FeatureWrapper feature="Dashboard">
            <Dashboard />
          </FeatureWrapper>
        ),
      },
      {
        path: '*',
        element: <Navigate to={'/'} />,
      },
    ],
  },
]);
