import {
	Home,
	Settings,
	type LucideIcon,
} from 'lucide-react';

export type NavigationLink = {
	key: string;
	path: string;
	featureKey?: string;
	icon: LucideIcon;
	label: string;
	hint?: string;
	links?: NavigationLink[];
};

export const navigationLinks: Array<NavigationLink> = [
	{
		key: 'dashboard',
		featureKey: 'Dashboard',
		path: '/dashboard',
		icon: Home,
		label: 'Dashboard',
		hint: 'Dashboard'
	},
	{
		key: 'preferencias',
		featureKey: 'Preferencias',
		path: '/preferencias',
		icon: Settings,
		label: 'Preferencias',
		hint: 'Preferências'
	},
];
