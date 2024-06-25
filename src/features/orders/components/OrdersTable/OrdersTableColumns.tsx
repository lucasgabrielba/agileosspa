import { CreatedAtCell } from '@/components/common/DataTable/Columns/CreatedAtCell';
import { OrdenationButton } from '@/components/common/DataTable/Columns/OrdenationButton';
import { OrderDTO } from '@/types/dtos/order-dto';
import type { ColumnDef } from '@tanstack/react-table';


export const columns: ColumnDef<OrderDTO>[] = [
	{
		id: 'Número',
		accessorKey: 'number',
		header: 'Número',
	},
	{
		id: 'Cliente',
		accessorKey: 'client.name',
		header: 'Cliente',
	},
	{
		id: 'Data de Abertura',
		accessorKey: 'created_at',
		header: ({ column }) => (
			<OrdenationButton column={column} buttonName="Data de Abertura" />
		),
		cell: ({ getValue }) => {
			return <CreatedAtCell value={getValue} />;
		},
	},
];
