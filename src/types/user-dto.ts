export interface UserDTO {
  id: string;
  status: UserStatus;

  name: string;
  email: string;

  created_at: Date;
  updated_at: Date;
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

