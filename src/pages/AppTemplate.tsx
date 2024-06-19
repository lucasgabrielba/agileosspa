import { Outlet } from 'react-router-dom';

import { CommandPallete, Sidebar, SidebarMobile } from '@/features/navigation';

export function AppTemplate() {
  return (
    <div className="bg-background flex h-dvh w-screen min-h-96 flex-col lg:grid lg:grid-cols-[auto,1fr]">
      <Sidebar className="hidden lg:flex" />
      <SidebarMobile className="lg:hidden" />

      {/* Main content */}
      <main className="flex-grow overflow-x-auto overflow-y-hidden lg:p-2 h-full w-full">
        <Outlet />
        <CommandPallete />
      </main>
    </div>
  );
}
