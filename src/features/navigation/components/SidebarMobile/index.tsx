import { type ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { Logo } from '@/components/logo';

import { Navbar } from './Navbar';
import { useOrganizationStore } from '@/store/useOrganizationStore';

export function SidebarMobile({
	className,
	...props
}: ComponentProps<'header'>) {
	const { brand } = useOrganizationStore();

	return (
		<header
			className={cn([
				'flex items-center bg-primary text-primary-foreground',
				className,
			])}
			{...props}
		>
			<Navbar />
			<div className="flex flex-grow justify-end items-center p-3">
				<Logo src={brand?.assets?.logoUrl} className="size-10" />
			</div>
		</header>
	);
}
