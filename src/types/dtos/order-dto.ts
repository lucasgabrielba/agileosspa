import { ClientDTO } from "./client-dto";

export interface OrderDTO {
  id: string;
  number: string;

  client?: ClientDTO;

  organization_id: string;
  client_id: string;
  user_id: string;

  status: OrderStatus;
  items: OrderItems[];
  order_history: OrderHistory[];

  problem_description: string;
  budget_description: string;
  internal_notes: string;

  closed_at: Date;
  estimated_date: Date;
  end_of_warranty_date: Date;

  is_reentry: boolean;
  priority: OrderPriority;
  attachments: OrderAttachments[];

  created_at: Date;
  updated_at: Date;
}

export interface OrderItems {
  id: string;
  model: string;
  serial: string;
  brand: string;
}

export interface OrderHistory {
  message: string;
  author: string;
  date: Date;
}

export interface OrderAttachments { }

export enum OrderStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in_progress',
  CLOSED = 'closed',
  CANCELED = 'canceled',
}

export enum OrderPriority {
  NORMAL = 'normal',
  HIGH = 'high',
}
