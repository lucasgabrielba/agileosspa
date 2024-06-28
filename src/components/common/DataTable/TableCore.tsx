/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { ColumnDef } from "@tanstack/react-table";

interface TableProps<T> {
  table: any;
  columns: ColumnDef<T, any>[];
  flexRender: any;
}

export function TableCore<T>({table, columns, flexRender}: TableProps<T>){
  return (
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
  )
}