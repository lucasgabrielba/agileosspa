import { useNavigate } from 'react-router-dom';

import { type NavigationLink } from '@/features/navigation/utils/navigation-links';

import { useMobileSidebar } from './sidebar-mobile-store';
import { useBrandStore } from '@/store/whitelabel/useBrandStore';

import { AccordionTrigger } from '@/components/ui/accordion';

type NavGroupProps = {
	data: NavigationLink;
};
export function NavItem({ data }: NavGroupProps) {
	const { abilites } = useBrandStore();
	const navigate = useNavigate();
	const { close: closeSidebar } = useMobileSidebar();

	if (abilites && !abilites.can('use', data.featureKey)) {
		return null;
	}

	return (
		<AccordionTrigger
			onClick={() => {
				navigate(data.path);
				closeSidebar();
			}}
			hideIndicator
			className="flex justify-start gap-x-1"
		>
			<data.icon strokeWidth={1} className="" />
			{data.label}
		</AccordionTrigger>
	);
}
