import {  DateCell } from '@/components/common/DataTable/Columns/DateCell';
import { OrdenationButton } from '@/components/common/DataTable/Columns/OrdenationButton';
import { StatusCell } from '@/components/common/DataTable/Columns/StatusCell';
import { OrderDTO } from '@/types/dtos/order-dto';
import type { ColumnDef } from '@tanstack/react-table';
import { ActionsDropDown } from './ActionsDropDown';


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
		id: 'Status',
		accessorKey: 'status',
		cell: ({ getValue }) => {
			return <StatusCell value={getValue} />;
		},
		header: 'Status'
	},
	{
		id: 'Data de Abertura',
		accessorKey: 'created_at',
		header: ({ column }) => (
			<OrdenationButton column={column} buttonName="Data de Abertura" />
		),
		cell: ({ getValue }) => {
			return <DateCell value={getValue} />;
		},
	},
	{
		id: 'Data de Encerramento',
		accessorKey: 'closed_at',
		header: ({ column }) => (
			<OrdenationButton column={column} buttonName="Data de Encerramento" />
		),
		cell: ({ getValue }) => {
			return <DateCell value={getValue} />;
		},
	},
	{
		id: 'Ações',
		enableHiding: false,
		cell: ({ row }) => {
			return <ActionsDropDown row={row} />;
		},
	},
];
