import { Link } from 'react-router-dom';

import { type NavigationLink } from '@/features/navigation/utils/navigation-links';

import { useSidebar } from './sidebar-store';

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { useOrganizationStore } from '@/store/useOrganizationStore';

type NavItemProps = {
	data: NavigationLink;
};

export function NavItem({ data }: NavItemProps) {
	const { featureKey, path, icon: Icon, label, hint } = data;
	const { isOpen, closeSidebar } = useSidebar();
	const { organization } = useOrganizationStore();
	const abilities = organization?.abilities;

	if (abilities && !abilities.includes(featureKey ?? '')) {
		return null;
	}

	return (
		<li>
			<Tooltip delayDuration={100}>
				<TooltipTrigger asChild>
					<Link
						to={path}
						onClick={isOpen && closeSidebar}
						className="grid grid-cols-[20px_auto] items-center ml-1 gap-2 w-full h-10 px-4 py-2 text-sm font-medium"
					>
						<div className="flex justify-center w-full">
							<Icon className="size-5" />
						</div>
						<span data-hidden={!isOpen} className="data-[hidden=true]:hidden">
							{label}
						</span>
					</Link>
				</TooltipTrigger>
				<TooltipContent
					sideOffset={-16}
					side="right"
					data-hidden={isOpen}
					className="data-[hidden=true]:hidden"
				>
					<p>{hint}</p>
				</TooltipContent>
			</Tooltip>
		</li>
	);
}
