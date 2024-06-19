import type { UseFormReturn } from 'react-hook-form';

import { LockKeyhole } from 'lucide-react';

import { FormControl, FormField, FormItem } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { InputPassword } from '@/components/ui/input-password';

interface PasswordInputProps {
	form: UseFormReturn;
}

export function PasswordInput(props: PasswordInputProps) {
	const { form } = props;

	return (
		<div className="relative flex items-center">
			<LockKeyhole className="absolute w-4 h-4 left-3 z-10" />
			<Label className="sr-only" htmlFor="password">
				Password
			</Label>
			<FormField
				control={form.control}
				name="password"
				render={({ field }) => (
					<FormItem className="w-full">
						<FormControl>
							<InputPassword
								{...field}
								id="password"
								placeholder="#SuperSecretPassword!"
								autoCapitalize="none"
								autoComplete="current-password"
								autoCorrect="off"
								className="pl-8"
							/>
						</FormControl>
					</FormItem>
				)}
			/>
		</div>
	);
}
