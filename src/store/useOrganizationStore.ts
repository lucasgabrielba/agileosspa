import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { OrganizationBrand, OrganizationDTO, OrganizationPreferences } from '@/types/organization-dto';

type OrganizationStoreState = {
  organization: OrganizationDTO | null;

  setOrganization: (newOrganization: OrganizationDTO) => void;
  updateOrganization: (partialOrganization: Partial<OrganizationDTO>) => void;
  clearOrganization: () => void;

  preferences: OrganizationPreferences;
  setPreferences: (newPreferences: OrganizationPreferences) => void;
  updatePreferences: (partialPreferences: Partial<OrganizationPreferences>) => void;

  brand: OrganizationBrand | null;
  setBrand: (newBrand: OrganizationBrand) => void;
  updateBrand: (partialBrand: Partial<OrganizationBrand>) => void;

};

export const useOrganizationStore = create(
  persist<OrganizationStoreState>(
    (set) => ({
      organization: null,
      setOrganization: (newOrganization: OrganizationDTO) => set({ organization: newOrganization }),
      updateOrganization: (partialOrganization: Partial<OrganizationDTO>) =>
        set((state) => ({ organization: { ...state.organization, ...partialOrganization } })),
      clearOrganization: () => set({ organization: null }),

      preferences: null,
      setPreferences: (newPreferences: OrganizationPreferences) => set({ preferences: newPreferences }),
      updatePreferences: (partialPreferences: Partial<OrganizationPreferences>) =>
        set((state) => ({ preferences: { ...state.preferences, ...partialPreferences } })),

      brand: null,
      setBrand: (newBrand: OrganizationBrand) => set({ brand: newBrand }),
      updateBrand: (partialBrand: Partial<OrganizationBrand>) =>
        set((state) => ({ brand: { ...state.brand, ...partialBrand } })),
    }),
    {
      name: 'organization-storage',
      version: 3,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
