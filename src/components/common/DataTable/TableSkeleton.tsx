
import { nanoid } from 'nanoid';

interface TableSkeletonProps {
	lines: number;
}

export const TableSkeleton = ({ lines }: TableSkeletonProps) => {

	return (
		<div className="animate-pulse bg-card lg:rounded-sm">
			{Array.from({ length: lines }).map(() => (
				<div key={nanoid()} className="flex p-2 gap-2">
					<div className="h-8 bg-card border rounded-sm w-3/4"></div>
					<div className="h-8 bg-card border rounded-sm w-1/4"></div>
				</div>
			))}
		</div>
	);
};
