import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';

import { useAuth } from '@/features/login/hooks/useAuth';

import { Form } from '@/components/ui/form';

import { EmailInput } from './EmailInput';
import { FormButtons } from './FormButtons';
import { FormFooter } from './FormFooter';
import { FormHeader } from './FormHeader';
import { schema } from './LoginSchema';
import { PasswordInput } from './PasswordInput';

interface LoginFormProps {
	redirectTo?: string;
}

export function LoginForm(props: LoginFormProps) {
	const { redirectTo } = props;
	const { loginUser, fetchUser } = useAuth();
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data) => {
		try {
			await loginUser(data);
			await fetchUser();
			navigate(redirectTo);
		} catch (error) {
			console.error('Login failed:', error);
			// Handle error (show message to user, etc.)
		}
	};

	React.useEffect(() => {
		const listener = (event) => {
			if (event.code === 'Enter' || event.code === 'NumpadEnter') {
				event.preventDefault();
				form.handleSubmit(onSubmit)();
			}
		};

		document.addEventListener('keydown', listener);
		return () => {
			document.removeEventListener('keydown', listener);
		};
	}, [form.handleSubmit, onSubmit]);

	return (
		<div className="p-8">
			<div className="flex flex-col justify-center w-full mx-auto space-y-6">
				<FormHeader />

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
						<div className="grid gap-4">
							<EmailInput form={form} />

							<PasswordInput form={form} />

							<FormButtons form={form} />
						</div>
					</form>
				</Form>

				<FormFooter />
			</div>
		</div>
	);
}
