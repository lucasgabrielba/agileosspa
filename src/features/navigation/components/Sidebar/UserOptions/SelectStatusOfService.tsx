import { useTranslation } from 'react-i18next';

import { useUserStore } from '@/features/login';

import type { StatusOfService } from '@/types/user-dto';

import { api } from '@/config/api';

import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

export function SelectStatusOfService() {
	const { t } = useTranslation('navigation');
	const { toast } = useToast();
	const { user, setAvailability } = useUserStore();

	const handleChangeStatusOfService = async (value: StatusOfService) => {
		try {
			await api.post(`users/${user.uuid}/service`, {
				status_of_service: value,
			});

			setAvailability(value);

			if (value === 'UNAVAILABLE') {
				toast({
					title: t('userOptions.statusChangedToUnavailable'),
					duration: 5000,
					variant: 'default',
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="grid grid-cols-3 items-center gap-4">
			<Label htmlFor="width">Status</Label>
			<Select
				value={user?.status_of_service}
				onValueChange={(value: StatusOfService) =>
					handleChangeStatusOfService(value)
				}
			>
				<SelectTrigger className="w-40">
					<SelectValue placeholder={t('userOptions.statusOfService')} />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="AVAILABLE">
						{t('userOptions.available')}
					</SelectItem>
					<SelectItem value="UNAVAILABLE">
						{t('userOptions.unavailable')}
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
