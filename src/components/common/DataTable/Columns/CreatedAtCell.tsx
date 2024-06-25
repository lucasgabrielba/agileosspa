import type { Getter } from '@tanstack/react-table';

interface CreatedAtCellProps {
  value: Getter<string>;
}

export function CreatedAtCell(props: CreatedAtCellProps) {
  const value = props.value();
  const date = new Date(value as string);

  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return <span>{formattedDate}</span>;
}
