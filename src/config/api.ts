import { env } from '@/config/env';
import { useUserStore } from '@/store/useUserStore';
import axios from 'axios';


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

			const from = window.location.pathname;

			window.location.href = `/login?redirectTo=${from}`;
		}

		return Promise.reject(error);
	},
);
