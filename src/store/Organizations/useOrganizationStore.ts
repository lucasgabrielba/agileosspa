import { create } from 'zustand';
import type { OrganizationDTO, OrganizationPreferences } from '@/types/organization-dto';

interface OrganizationsState {
  organization: OrganizationDTO;
  preferences: OrganizationPreferences;
}

interface OrganizationsActions {
  setOrganization: (organization: OrganizationDTO) => void;
  updateOrganization: (partialOrganization: Partial<OrganizationDTO>) => void;

  setPreferences: (preferences: OrganizationPreferences) => void;
  updatePreferences: (partialPreferences: Partial<OrganizationPreferences>) => void;
}

interface OrganizationsStore extends OrganizationsState, OrganizationsActions { }

export const useOrganizationsStore = create<OrganizationsStore>((set) => ({
  organization: {} as OrganizationDTO,

  setOrganization: (organization: OrganizationDTO) => set({ organization }),
  updateOrganization: (partialOrganization: Partial<OrganizationDTO>) =>
    set((state) => ({ organization: { ...state.organization, ...partialOrganization } })),


  preferences: {} as OrganizationPreferences,

  setPreferences: (preferences: OrganizationPreferences) => set({ preferences }),
  updatePreferences: (partialPreferences: Partial<OrganizationPreferences>) =>
    set((state) => ({ preferences: { ...state.preferences, ...partialPreferences } })),
}));
