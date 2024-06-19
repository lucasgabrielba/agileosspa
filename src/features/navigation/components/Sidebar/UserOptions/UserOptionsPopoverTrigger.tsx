import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useSidebar } from '../sidebar-store';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { PopoverTrigger } from '@/components/ui/popover';
import { getInitials } from '@/lib/getInitials';
import { useUsersStore } from '@/store/useUserStore';
import { Button } from '@/components/ui/button';


export function UserOptionsPopoverTrigger() {
	const { isOpen } = useSidebar();
	const { user } = useUsersStore();
	const navigate = useNavigate();
	const location = useLocation();

	React.useEffect(() => {
		if (!user?.id) {
			return navigate(`/login?redirectTo=${location.pathname}`);
		}
	}, [user?.id, navigate, location.pathname]);

	return (
		<PopoverTrigger asChild tabIndex={0} className="relative">
			<Button
				className={`w-full justify-start gap-2 bottom-2 right-4 lg:right-2`}
			>
				<div className="relative">
					<Avatar>
						<AvatarFallback>
							{user && getInitials(user?.name)}
						</AvatarFallback>
					</Avatar>
				</div>
				<span data-hidden={!isOpen} className="data-[hidden=true]:hidden">
					{user?.name}
				</span>
			</Button>
		</PopoverTrigger>
	);
}
