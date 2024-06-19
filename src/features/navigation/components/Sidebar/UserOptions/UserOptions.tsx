import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { LogOut } from 'lucide-react';

import { useUserStore } from '@/features/login/hooks/useUserStore';

import { ComponentFail } from '@/components/common/ComponentFail';
import { ErrorBoundaryWrapper } from '@/components/common/ErrorBoundaryWrapper';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { LanguageSelector } from '@/features/navigation/components/LanguageSelector';

import { SelectActiveAccount } from './SelectActiveAccount';
import { SelectStatusOfService } from './SelectStatusOfService';
import { SelectTheme } from './SelectTheme';
import { UserOptionsHeader } from './UserOptionsHeader';
import { UserOptionsPopoverTrigger } from './UserOptionsPopoverTrigger';

export function UserOptions() {
	const { user, clearUser } = useUserStore();
	const navigate = useNavigate();
	const location = useLocation();

	React.useEffect(() => {
		if (!user?.uuid) {
			return navigate(`/login?redirectTo=${location.pathname}`);
		}
	}, [user?.uuid, navigate, location.pathname]);

	const logout = () => {
		clearUser();
		navigate('/login');
	};

	return (
		<ErrorBoundaryWrapper fallback={ComponentFail}>
			<Popover>
				<UserOptionsPopoverTrigger />

				<PopoverContent className="w-72" side="top">
					<div className="grid gap-4">
						<UserOptionsHeader />

						<Separator className="my-2" />
						<div className="grid gap-2">
							<SelectTheme />

							<SelectActiveAccount />

							<SelectStatusOfService />

							<LanguageSelector />
						</div>
						<Separator className="my-2" />

						<Button variant="destructive" onClick={logout}>
							<LogOut className="mr-1 h-4 w-4" />
							{t('userOptions.logout')}
						</Button>
					</div>
				</PopoverContent>
			</Popover>
		</ErrorBoundaryWrapper>
	);
}
