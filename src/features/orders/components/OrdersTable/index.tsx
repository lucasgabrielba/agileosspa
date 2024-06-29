import * as React from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { TableSkeleton } from "../../../../components/common/DataTable/TableSkeleton";
import { columns } from "./OrdersTableColumns";
import { TablePagination } from "@/components/common/DataTable/TablePagination";
import { useOrganizationStore } from "@/store/useOrganizationStore";
import { useOrdersQuery } from "../../hooks/useOrdersQuery";
import { TableSearchAndOptions } from "@/components/common/DataTable/TableSearchAndOptions";
import { TableCore } from "@/components/common/DataTable/TableCore";

interface OrdersTableProps {
	debouncedValue: string;
	searchAnOptions: boolean;
	searchAnOptionsProps?: {
		value: string;
		setValue: (value: string) => void;
		inputProps: {
			id: string;
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
	};
}

export function OrdersTable({
	debouncedValue,
	searchAnOptions,
	searchAnOptionsProps,
}: OrdersTableProps) {
	const { organization } = useOrganizationStore();

	const [page, setPage] = React.useState(1);
	const [sorting, setSorting] = React.useState([]);
	const [columnFilters, setColumnFilters] = React.useState([]);

	const maxRows = 6

	const { data, isFetching, isPending, isPlaceholderData } = useOrdersQuery({
		queryKey: `orders ${debouncedValue} ${page} ${sorting}`,
		organization,
		search: debouncedValue,
		page,
		perPage: maxRows,
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
		initialState: {
			columnVisibility: {
				'Data de Encerramento': false,
			},
		}
	});

	return (
		<div className="overflow-hidden w-full">

			<div>
			{searchAnOptions && (
				<TableSearchAndOptions
					table={table}
					searchAnOptionsProps={searchAnOptionsProps}
				/>
			)}

			{(isFetching || isPending) ? (
					<TableSkeleton lines={maxRows} />
			) : (
				<TableCore 
					table={table}
					columns={columns}
					flexRender={flexRender}
				/>
			)}
			</div>
			<TablePagination
				data={data}
				isPlaceholderData={isPlaceholderData}
				page={page}
				setPage={setPage}
			/>
		</div>
	);
}
