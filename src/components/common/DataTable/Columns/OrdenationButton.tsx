import type { Column } from '@tanstack/react-table';

import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface HeaderButtonProps<T> {
  column: Column<T>;
  buttonName: string;
}

export function OrdenationButton<T>(props: HeaderButtonProps<T>) {
  const { column, buttonName } = props;

  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {buttonName}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}
