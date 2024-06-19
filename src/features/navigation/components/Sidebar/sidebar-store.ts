import { create } from 'zustand';

type SidebarStore = {
	isOpen: boolean;
};

type SidebarActions = {
	toggleOpen: () => void;
	closeSidebar: () => void;
};

export const useSidebar = create<SidebarStore & SidebarActions>((set) => ({
	isOpen: false,
	toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
	closeSidebar: () => set(() => ({ isOpen: false })),
}));
