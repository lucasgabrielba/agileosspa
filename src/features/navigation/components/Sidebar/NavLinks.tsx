import { type NavigationLink } from '@/features/navigation/utils/navigation-links';

import { NavItem } from './NavItem';

type NavGroupProps = {
	links: NavigationLink[];
};

export function NavLinks({ links }: NavGroupProps) {
	return (
		<ul className="flex flex-col gap-4 mt-5">
			{links.map((link) => (
				<NavItem key={link.key} data={link} />
			))}
		</ul>
	);
}
