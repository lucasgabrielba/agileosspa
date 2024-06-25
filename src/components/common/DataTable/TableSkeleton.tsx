
import type { ColumnDef } from '@tanstack/react-table';
import { nanoid } from 'nanoid';

interface TableSkeletonProps {
	columns: ColumnDef<any>[];
}

export const TableSkeleton = ({ columns }: TableSkeletonProps) => {

	return (
		<div className="animate-pulse">
			{Array.from({ length: columns.length }).map((_) => (
				<div key={nanoid()} className="flex space-x-4 p-4">
					<div className="h-8 bg-card rounded-sm w-3/4"></div>
					<div className="h-8 bg-card rounded-sm w-1/4"></div>
				</div>
			))}
		</div>
	);
};
