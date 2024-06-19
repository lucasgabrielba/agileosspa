import type { UseFormReturn } from 'react-hook-form';

import { UserIcon } from 'lucide-react';

import { FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EmailInputProps {
	form: UseFormReturn;
}

export function EmailInput(props: EmailInputProps) {
	const { form } = props;

	return (
		<div className="relative flex items-center">
			<UserIcon className="absolute w-4 h-4 left-3" />
			<Label className="sr-only">Email</Label>
			<FormField
				control={form.control}
				name="email"
				render={({ field }) => (
					<FormItem className="w-full">
						<FormControl>
							<Input
								{...field}
								id="email"
								placeholder="name@example.com"
								type="email"
								autoCapitalize="none"
								autoComplete="email"
								className="pl-8"
							/>
						</FormControl>
					</FormItem>
				)}
			/>
		</div>
	);
}
