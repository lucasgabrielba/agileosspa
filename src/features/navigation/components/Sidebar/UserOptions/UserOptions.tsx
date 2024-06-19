import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LogOut } from 'lucide-react';

import { useUserStore } from '@/features/login/hooks/useUserStore';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

import { SelectTheme } from './SelectTheme';
import { UserOptionsHeader } from './UserOptionsHeader';
import { UserOptionsPopoverTrigger } from './UserOptionsPopoverTrigger';
import ErrorBoundary from '@/components/common/ErrorBoundary';

export function UserOptions() {
	const { user, clearUser } = useUserStore();
	const navigate = useNavigate();
	const location = useLocation();

	React.useEffect(() => {
		if (!user?.id) {
			return navigate(`/login?redirectTo=${location.pathname}`);
		}
	}, [user?.id, navigate, location.pathname]);

	const logout = () => {
		clearUser();
		navigate('/login');
	};

	return (
		<ErrorBoundary>
			<Popover>
				<UserOptionsPopoverTrigger />

				<PopoverContent className="w-72" side="top">
					<div className="grid gap-4">
						<UserOptionsHeader />

						<Separator className="my-2" />
						<div className="grid gap-2">
							<SelectTheme />
						</div>
						<Separator className="my-2" />

						<Button variant="destructive" onClick={logout}>
							<LogOut className="mr-1 h-4 w-4" />
							<span>Sair</span>
						</Button>
					</div>
				</PopoverContent>
			</Popover>
		</ErrorBoundary>
	);
}
