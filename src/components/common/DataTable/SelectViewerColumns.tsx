import { OrderDTO } from '@/types/dtos/order-dto'
import type { Table } from '@tanstack/react-table';

import { ChevronDown, Columns3 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SelectViewerColumnsProps {
	table: Table<OrderDTO>;
}

export function SelectViewerColumns(
	props: SelectViewerColumnsProps,
) {
	const { table } = props;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className='rounded-sm'>
					<Columns3 className="mr-2 h-4 w-4" />
					<span>Colunas</span>
					<ChevronDown className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuGroup>
					{table
						.getAllColumns()
						.filter((column) => column.getCanHide())
						.map((column, index) => {
							return (
								<DropdownMenuItem key={index}>
									<DropdownMenuCheckboxItem
										key={column.id}
										className="capitalize w-full"
										checked={column.getIsVisible()}
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}
									>
										{column.id}
									</DropdownMenuCheckboxItem>
								</DropdownMenuItem>
							);
						})}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
