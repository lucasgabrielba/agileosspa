import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { OrderDTO } from '@/types/dtos/order-dto';
import { SearchInput } from './SearchInput';
import { SelectViewerColumns } from './SelectViewerColumns';
import { DeleteDialog } from '../DeleteDialog';

interface TableSearchAndOptionsProps {
	table: Table<OrderDTO>;
	searchAnOptionsProps: {
		value: string;
		setValue: (value: string) => void;
		inputProps: {
			id: string;
			label: string;
			placeholder: string;
		};

		hasSelectedRows?: boolean;
		setRowSelection?: (selection: object) => void;
		entity?: string;
		button?: {
			url: string;
			text: string;
			icon: React.ReactNode;
		};
	}
}

export const TableSearchAndOptions: React.FC<TableSearchAndOptionsProps> = ({
	table,
	searchAnOptionsProps: {
		value,
		setValue,
		inputProps,
		hasSelectedRows,
		setRowSelection,
		entity,
		button,
	},
}) => {
	const navigate = useNavigate();

	const handleNavigate = () => navigate(button.url);

	const itemsIds = table.getSelectedRowModel().flatRows.map(row => row.original.id);

	return (
		<div className="flex flex-col lg:flex-row justify-between pb-4 w-full">
			<div className="flex flex-row lg:items-center gap-2 p-2 w-full">
				<SearchInput value={value} setValue={setValue} inputProps={inputProps} />
				{hasSelectedRows && (
					<DeleteDialog itemsIds={itemsIds} entity={entity} setRowSelection={setRowSelection}>
						<Button variant="destructive" onClick={() => { }} className="w-full lg:w-auto">
							Excluir Selecionados
						</Button>
					</DeleteDialog>
				)}
			</div>
			<div className="flex lg:flex-row flex-col gap-2 p-2 items-center">
				<div className="flex flex-row gap-2 p-2">
					<SelectViewerColumns table={table} />
					{button && (
						<Button onClick={handleNavigate} className="w-full lg:w-auto">
							{button.icon}
							{button.text}
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};