import { type ComponentProps } from 'react';

import { navigationLinks } from '@/features/navigation/utils/navigation-links';
import { cn } from '@/lib/utils';

import { useSidebar } from './sidebar-store';

import { Logo } from '@/components/logo';

import { NavFooter } from './Footer';
import { NavLinks } from './NavLinks';
import { useOrganizationStore } from '@/store/useOrganizationStore';

export function Sidebar({ className, ...otherProps }: ComponentProps<'aside'>) {
	const { isOpen } = useSidebar();
	const { organization } = useOrganizationStore();
	const brand = organization?.brand;

	return (
		<aside
			data-expanded={isOpen}
			className={cn([
				'h-full max-h-screen flex flex-col pb-2 w-16 transition-all duration-300',
				'data-[expanded=true]:w-48',
				className,
				'bg-primary',
			])}
			{...otherProps}
		>
			<div className="flex items-center justify-center my-3">
				<Logo src={brand?.assets?.logoUrl} className="size-10" />
			</div>
			<nav className="flex flex-col flex-grow overflow-hidden bg-primary text-primary-foreground rounded-r-sm">
				<NavLinks links={navigationLinks} />
				<NavFooter />
			</nav>
		</aside>
	);
}
