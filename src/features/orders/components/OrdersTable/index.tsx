import * as React from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { TableSkeleton } from "../../../../components/common/DataTable/TableSkeleton";
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { columns } from "./OrdersTableColumns";
import { TablePagination } from "@/components/common/DataTable/TablePagination";
import { useOrganizationStore } from "@/store/useOrganizationStore";
import { useOrdersQuery } from "../../hooks/useOrdersQuery";

interface OrdersTableProps {
	debouncedValue: string;
}

export function OrdersTable({
	debouncedValue,
}: OrdersTableProps) {
	const { organization } = useOrganizationStore();

	const [page, setPage] = React.useState(1);
	const [sorting, setSorting] = React.useState([]);
	const [columnFilters, setColumnFilters] = React.useState([]);

	const { data, isFetching, isPending, isPlaceholderData } = useOrdersQuery({
		queryKey: `orders ${debouncedValue} ${page} ${sorting}`,
		organization,
		search: debouncedValue,
		page,
	});

	const table = useReactTable({
		data: data?.data || [],
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters,
		},
	});

	return (
		<div className="overflow-hidden w-full">
			{(isFetching || isPending) ? (
				<TableSkeleton lines={5} />
			) : (
				<Table className="bg-card lg:rounded-sm overflow-hidden">
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="text-center">
									Nenhum resultado encontrado
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			)}
			<TablePagination
				data={data}
				isPlaceholderData={isPlaceholderData}
				page={page}
				setPage={setPage}
			/>
		</div>
	);
}
