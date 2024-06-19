import { env } from '@/config/env';
import axios from 'axios';

import { useUserStore } from '@/features/login/hooks/useUserStore';

const { clearUser } = useUserStore.getState();

export const api = axios.create({
	baseURL: env.VITE_API_URL,
	withCredentials: true,
	withXSRFToken: true,
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			clearUser();
			// Pega a rota atual para redirecionar o usuário para a mesma rota após o login
			const from = window.location.pathname;

			window.location.href = `/login?redirectTo=${from}`;
		}

		return Promise.reject(error);
	},
);
