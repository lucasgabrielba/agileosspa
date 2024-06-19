import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';

import { appRoutes } from './AppRoutes';
import { FIFTEEN_MINUTES, FIVE_MINUTES, isDev } from './config/constants';
import { useOrganizationStore } from './store/useOrganizationStore';
import { ThemeProvider } from './components/theme-provider';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      gcTime: FIVE_MINUTES,
      staleTime: FIFTEEN_MINUTES,
    },
  },
});
export default function App() {
  const { loadOrganization } = useOrganizationStore();

  useEffect(() => {
    loadOrganization();
  }, [loadOrganization]);

  return (
    <>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          {isDev && (
            <ReactQueryDevtools
              initialIsOpen={false}
              buttonPosition="bottom-right"
            />
          )}
          <TooltipProvider>
            <RouterProvider router={appRoutes} />
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
