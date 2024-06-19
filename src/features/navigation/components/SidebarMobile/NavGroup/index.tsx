import { Link } from 'react-router-dom';

import { type NavigationLink } from '@/features/navigation/utils/navigation-links';

import { useMobileSidebar } from '../sidebar-mobile-store';

import { AccordionContent, AccordionTrigger } from '@/components/ui/accordion';

import { PageLinks } from './PageLinks';

type NavGroupProps = {
	data: NavigationLink;
};
export function NavGroup({ data }: NavGroupProps) {
	const { close: closeSidebar } = useMobileSidebar();

	return (
		<>
			<AccordionTrigger>
				<span className="flex justify-start gap-x-1">
					<data.icon strokeWidth={1} />
					{data.label}
				</span>
			</AccordionTrigger>
			<AccordionContent className="ml-4">
				<ul className="flex flex-col">
					{data.links.map((item) =>
						item.links ? (
							<li key={item.key}>
								<PageLinks data={item} />
							</li>
						) : (
							<li key={item.key} className="">
								<Link
									to={item.path}
									onClick={closeSidebar}
									className="block h-10 py-2 text-sm font-normal"
								>
									{item.label}
								</Link>
							</li>
						),
					)}
				</ul>
			</AccordionContent>
		</>
	);
}
