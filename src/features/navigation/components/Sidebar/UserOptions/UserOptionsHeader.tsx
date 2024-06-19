import { useUserStore } from '@/features/login';

import { Pen } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function UserOptionsHeader() {
	const { user } = useUserStore();

	return (
		<div className="space-y-2">
			<h4 className="font-medium leading-none">
				<span>{user?.attributes?.name}</span>
				<Button variant="link" className="absolute right-1 top-1 ml-1">
					<Pen className="h-4 w-4" />
				</Button>
			</h4>
		</div>
	);
}
