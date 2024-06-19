import { create } from 'zustand';
import type { UserDTO } from '@/types/user-dto';

interface UsersState {
  user: UserDTO;
}

interface UsersActions {
  setUser: (user: UserDTO) => void;
  updateUser: (partialUser: Partial<UserDTO>) => void;
}

interface UsersStore extends UsersState, UsersActions { }

export const useUsersStore = create<UsersStore>((set) => ({
  user: {} as UserDTO,

  setUser: (user: UserDTO) => set({ user }),
  updateUser: (partialUser: Partial<UserDTO>) =>
    set((state) => ({ user: { ...state.user, ...partialUser } })),
}));
