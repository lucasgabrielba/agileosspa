import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/login';
import { Orders } from './pages/orders';
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
          <FeatureWrapper feature="Orders">
            <Orders />
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
