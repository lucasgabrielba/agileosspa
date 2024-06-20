import { useNavigate } from 'react-router-dom';

import { type NavigationLink } from '@/features/navigation/utils/navigation-links';

import { useMobileSidebar } from './sidebar-mobile-store';

import { AccordionTrigger } from '@/components/ui/accordion';
import { useOrganizationStore } from '@/store/useOrganizationStore';

type NavGroupProps = {
	data: NavigationLink;
};
export function NavItem({ data }: NavGroupProps) {
	const { abilities } = useOrganizationStore();
	const navigate = useNavigate();
	const { close: closeSidebar } = useMobileSidebar();

	if (abilities && !abilities.includes(data.featureKey)) {
		return null;
	}

	return (
		<AccordionTrigger
			onClick={() => {
				navigate(data.path);
				closeSidebar();
			}}
			className="flex justify-start gap-x-1"
		>
			<data.icon strokeWidth={1} className="" />
			{data.label}
		</AccordionTrigger>
	);
}
