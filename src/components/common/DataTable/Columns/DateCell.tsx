import { formattedDate } from '@/lib/formatedDate';
import type { Getter } from '@tanstack/react-table';

interface DateCellProps {
  value: Getter<string>;
}

export function DateCell({ value }: DateCellProps) {

  if (!value()) return null;

  const date = new Date(value() as string);

  return (
    <div>
      <span>{formattedDate(date)}</span>
    </div>
);
}
