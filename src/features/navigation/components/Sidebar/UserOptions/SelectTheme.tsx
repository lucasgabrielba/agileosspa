import { useTranslation } from 'react-i18next';

import type { Theme } from '@/providers/theme-provider';

import { useTheme } from '@/providers/hooks/useTheme';

import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

export function SelectTheme() {
	const { t } = useTranslation('navigation');
	const { theme, setTheme } = useTheme();

	const handleSelectChange = (selectedTheme: Theme) => {
		setTheme(selectedTheme);
	};

	return (
		<div className="grid grid-cols-3 items-center gap-4">
			<Label htmlFor="width">{t('userOptions.theme')}</Label>
			<Select onValueChange={handleSelectChange} defaultValue={theme}>
				<SelectTrigger className="w-40">
					<SelectValue placeholder={t(`userOptions.${theme}`)}>
						{t(`userOptions.${theme}`)}
					</SelectValue>
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="light">{t('userOptions.light')}</SelectItem>
					<SelectItem value="dark">{t('userOptions.dark')}</SelectItem>
					<SelectItem value="system">{t('userOptions.system')}</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
