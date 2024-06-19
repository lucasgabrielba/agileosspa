import { useTranslation } from 'react-i18next';

import { useUserStore } from '@/features/login';

import type { AccountDTO } from '@/types/account-dto';

import { api } from '@/config/api';

import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

export function SelectActiveAccount() {
	const { t } = useTranslation('navigation');
	const { user, setActiveAccount } = useUserStore();

	const handleChangeAccount = async (value: string) => {
		try {
			await api.post(`users/${user.uuid}/active-account`, {
				account_uuid: value,
			});
			const account = user.accounts.find(
				(account: AccountDTO) => account.uuid === value,
			);

			setActiveAccount(account);

			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="grid grid-cols-3 items-center gap-4">
			<Label htmlFor="width">{t('userOptions.company')}</Label>
			<Select
				value={user?.active_account?.uuid}
				onValueChange={(value) => handleChangeAccount(value)}
			>
				<SelectTrigger className="w-40">
					<SelectValue placeholder={t('userOptions.company')} />
				</SelectTrigger>
				<SelectContent>
					{user?.accounts.map((account) => (
						<SelectItem key={account.uuid} value={account.uuid}>
							{account.attributes.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
