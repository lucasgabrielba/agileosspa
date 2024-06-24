import { PhoneDTO } from "./phones-dto"

export type ClientDTO = {
  id: string
  name: string
  email: string
  document: string
  organization_id: string
  address_id: string
  created_at: string
  updated_at: string
  phones?: PhoneDTO[]
}

