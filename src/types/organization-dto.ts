import { AddressDTO } from "./address-dto";

export interface OrganizationDTO {
  id: string;
  status: OrganizationStatus;

  name: string;
  email: string;
  phones: string[];
  document?: string;

  preferences: OrganizationPreferences;
  abilites: string[];
  adress?: AddressDTO;

  created_at: Date;
  updated_at: Date;
}

export enum OrganizationStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  FREE_TRIAL = 'free_trial',
}

export interface OrganizationPreferences {
  multiple_items_per_order: boolean;
}

