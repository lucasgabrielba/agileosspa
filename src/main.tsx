import { RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';

import { appRoutes } from './AppRoutes';
import { FIFTEEN_MINUTES, FIVE_MINUTES, isDev } from './config/constants';
import { ThemeProvider } from './components/theme-provider';

/**
 * Configurações padrões do ReactQuery.
 * Se aplica à todas as requests a não ser que seja sobrescrito
 * na própria request.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false, // Não refazer request quando component montar
      refetchOnWindowFocus: false, // This disables automatic refetching on window focus
      gcTime: FIVE_MINUTES, // Tempo de cache
      staleTime: FIFTEEN_MINUTES, // Tempo até uma request ser considerada "antiga" (stale)
    },
  },
});
export default function App() {

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
