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
  brand: OrganizationBrand;
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

export interface OrganizationBrand {
  name: string;
  assets: OrganizationAssets;
}

export interface OrganizationAssets {
  logoUrl: string;
  login: { bannerUrl: string }
  faviconUrl: string;
}

