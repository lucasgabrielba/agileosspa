import { navigationLinks } from '@/features/navigation/utils/navigation-links';

import { Menu } from 'lucide-react';

import { useMobileSidebar } from './sidebar-mobile-store';

import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { NavFooter } from './Footer';
import { NavGroup } from './NavGroup';
import { NavItem } from './NavItem';

export function Navbar() {
	const { isOpen, toggle } = useMobileSidebar();

	return (
		<nav>
			<Sheet open={isOpen} onOpenChange={toggle}>
				<SheetTrigger asChild>
					<Button className="bg-transparent">
						<Menu className="h-5, w-5" />
					</Button>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="flex flex-col w-60 bg-primary text-primary-foreground rounded-none pt-8 border-none"
				>
					<Accordion type="single" collapsible>
						{navigationLinks.map((item) => (
							<AccordionItem value={item.path} key={item.key}>
								{item.links ? (
									<NavGroup data={item} />
								) : (
									<NavItem data={item} />
								)}
							</AccordionItem>
						))}
					</Accordion>
					<NavFooter />
				</SheetContent>
			</Sheet>
		</nav>
	);
}
