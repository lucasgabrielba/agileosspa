import { useCallback } from 'react';

import { api } from '@/config/api';
import { useUserStore } from '@/store/useUserStore';

interface Credentials {
	email: string;
	password: string;
}

export function useAuth() {
	const setUser = useUserStore((state) => state.setUser);

	const loginUser = useCallback(async (credentials: Credentials) => {
		await api.get('/sanctum/csrf-cookie');
		const response = await api.post('/auth/login', credentials);
		api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
	}, []);

	const fetchUser = useCallback(async () => {
		try {
			const response = await api.get('/auth/get-me');
			setUser(response.data);
		} catch (error) {
			console.error('Error fetching user:', error);
		}
	}, []);

	return { loginUser, fetchUser };
}
