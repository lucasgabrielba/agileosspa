import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { useOrganizationStore } from '@/store/useOrganizationStore';
import { useUserStore } from '@/store/useUserStore';
import { LoginBanner } from '@/features/login/components/LoginBanner';
import { LoginForm } from '@/features/login/components/LoginForm/LoginForm';

export function Login() {
	const emailInputRef = React.useRef<HTMLInputElement | null>(null);
	const [searchParams] = useSearchParams();
	const redirectTo = searchParams.get('redirectTo') || '/dashboard';
	const navigate = useNavigate();
	const { user } = useUserStore();
	const { brand } = useOrganizationStore();

	React.useEffect(() => {
		if (user?.id) {
			navigate(redirectTo);
		}

		if (emailInputRef.current) emailInputRef.current.focus();
	}, [user?.id, redirectTo, navigate]);

	return (
		<div className="bg-background h-dvh min-h-96 w-screen lg:grid lg:grid-cols-[auto,1fr]">
			<div className="grid items-center justify-center w-full h-full grid-cols-12 grid-rows-12">
				<div className="relative grid items-center justify-center w-full h-full col-span-12 overflow-hidden bg-secondary col-start-0 row-start-0 row-span-12 lg:col-span-10 lg:col-start-2 lg:row-span-10 lg:row-start-2 lg:grid-cols-2 lg:rounded-sm">
					<a
						href="/register"
						className={cn('absolute right-4 top-4 md:right-8 md:top-8')}
						tabIndex={0}
					>
						Criar Conta
					</a>

					<LoginBanner src={brand?.assets?.login?.bannerUrl} />

					<LoginForm redirectTo={redirectTo} />
				</div>
			</div>
		</div>
	);
}
