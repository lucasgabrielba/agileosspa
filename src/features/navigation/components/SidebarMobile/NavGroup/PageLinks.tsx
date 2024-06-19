import { Link } from 'react-router-dom';

import { type NavigationLink } from '@/features/navigation/utils/navigation-links';
import { AccordionTrigger } from '@radix-ui/react-accordion';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
} from '@/components/ui/accordion';

type PageLinksProps = {
	data: NavigationLink;
};
export function PageLinks({ data }: PageLinksProps) {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value={data.path}>
				<AccordionTrigger className="flex justify-start gap-x-1">
					<span className="py-2">{data.label}</span>
				</AccordionTrigger>
				<AccordionContent>
					<ul className="flex flex-col ml-3">
						{data.links.map((link) => (
							<li key={link.key} className="">
								<Link
									to={link.path}
									className="block h-10 py-2 text-sm font-normal"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
