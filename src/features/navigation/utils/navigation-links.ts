import { OrganizationAbilities } from '@/types/dtos/organization-dto';
import {
	Settings,
	Wrench,
	type LucideIcon,
} from 'lucide-react';

export type NavigationLink = {
	key: string;
	path: string;
	featureKey?: OrganizationAbilities;
	icon: LucideIcon;
	label: string;
	hint?: string;
	links?: NavigationLink[];
};

export const navigationLinks: Array<NavigationLink> = [
	{
		key: 'orders',
		featureKey: 'Orders',
		path: '/ordem-de-servico',
		icon: Wrench,
		label: 'Ordem de Serviço',
		hint: 'Ordem de Serviço'
	},
	{
		key: 'preferencias',
		featureKey: 'Settings',
		path: '/preferencias',
		icon: Settings,
		label: 'Preferencias',
		hint: 'Preferências'
	},
];
