import type { UseFormReturn } from 'react-hook-form';

import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface FormButtonsProps {
	form: UseFormReturn;
}

export function FormButtons(props: FormButtonsProps) {
	const { form } = props;

	return (
		<>
			<div className="flex justify-end">
				<a href="/forget" className="text-sm hover:underline">
					Esqueceu a senha?
				</a>
			</div>

			<Button type="submit" disabled={form.formState.isSubmitting}>
				{form.formState.isSubmitting && (
					<Loader2 className="w-4 h-4 mr-2 animate-spin" />
				)}
				Entrar com Email
			</Button>
		</>
	);
}
