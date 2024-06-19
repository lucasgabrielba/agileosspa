import { type ComponentProps } from 'react';

import { navigationLinks } from '@/features/navigation/utils/navigation-links';
import { cn } from '@/lib/utils';

import { useSidebar } from './sidebar-store';
import { useBrandStore } from '@/store/whitelabel/useBrandStore';
import { isDefaultDomain } from '@/store/whitelabel/utils/domain-checker';

import { Logo } from '@/components/logo';

import { NavFooter } from './Footer';
import { NavLinks } from './NavLinks';

export function Sidebar({ className, ...otherProps }: ComponentProps<'aside'>) {
	const { isOpen } = useSidebar();
	const { brand } = useBrandStore();

	return (
		<aside
			data-expanded={isOpen}
			className={cn([
				'h-full max-h-screen flex flex-col pb-2 w-16 transition-all duration-300',
				'data-[expanded=true]:w-48',
				className,
				!isDefaultDomain() && 'bg-primary',
			])}
			{...otherProps}
		>
			<div className="flex items-center justify-center my-3">
				<Logo src={brand?.assets?.logoSquareUrl} className="size-10" />
			</div>
			<nav className="flex flex-col flex-grow overflow-hidden bg-primary text-primary-foreground rounded-r-sm">
				<NavLinks links={navigationLinks} />
				<NavFooter />
			</nav>
		</aside>
	);
}
