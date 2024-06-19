import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export interface LoginFormFields {
	email: string;
	password: string;
}

export function useLoginForm() {
	const schema = z.object({
		email: z.string().email('Email inválido').min(1, 'Email é obrigatório'),
		password: z
			.string()
			.min(1, 'Senha é obrigatória')
			.min(8, 'Senha deve ter no mínimo 8 caracteres'),
	});

	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
	});

	return {
		form,
	};
}
