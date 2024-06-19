export interface AddressDTO {
  id: string;

  street?: string;
  number?: string;
  complement?: string;
  district?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  reference?: string;

  organization_id?: string;
  client_id?: string;

  created_at: Date;
  updated_at: Date;
}