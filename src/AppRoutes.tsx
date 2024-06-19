import { Navigate, createBrowserRouter } from 'react-router-dom';


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
      // {
      // 	path: 'settings',
      // 	element: (
      // 		<FeatureWrapper feature="Settings">
      // 			<Settings />
      // 		</FeatureWrapper>
      // 	),
      // },

      // {
      // 	path: 'campaigns',
      // 	children: [
      // 		{
      // 			index: true,
      // 			element: (
      // 				<FeatureWrapper feature="Campaigns">
      // 					<Campaigns />
      // 				</FeatureWrapper>
      // 			),
      // 		},
      // 		{
      // 			path: 'create',
      // 			element: (
      // 				<FeatureWrapper feature="Campaigns">
      // 					<CreateCampaign />
      // 				</FeatureWrapper>
      // 			),
      // 		},
      // 	],
      // },
      {
        path: '*',
        element: <Navigate to={'/'} />,
      },
    ],
  },
]);
