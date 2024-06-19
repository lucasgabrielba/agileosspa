import { create } from 'zustand';

type Store = {
	isOpen: boolean;
};

type Actions = {
	toggle: () => void;
	close: () => void;
};

export const useMobileSidebar = create<Store & Actions>((set) => ({
	isOpen: false,
	toggle: () => set((state) => ({ isOpen: !state.isOpen })),
	close: () => set(() => ({ isOpen: false })),
}));
