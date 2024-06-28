import { OrderStatus } from '@/types/dtos/order-dto';
import type { Getter } from '@tanstack/react-table';

interface StatusCellProps {
  value: Getter<OrderStatus>;
}

export function StatusCell(props: StatusCellProps) {
  const value = props.value();

  let borderColor = '';

  switch (value) {
    case OrderStatus.OPEN:
      borderColor = 'border-primary';
      break;
    case OrderStatus.IN_PROGRESS:
      borderColor = 'border-secondary';
      break;
    case OrderStatus.REENTRY:
      borderColor = 'border-tertiary';
      break;
    case OrderStatus.CLOSED:
      borderColor = 'border-green-500';
      break;
    case OrderStatus.CANCELED:
      borderColor = 'border-red-500';
      break;
    default:
      borderColor = '';
  }

  return (
    <div className={`border ${borderColor} rounded-sm px-2 py-1 text-sm  text-foreground`}>
      <span>{value}</span>
    </div>
  );
}
