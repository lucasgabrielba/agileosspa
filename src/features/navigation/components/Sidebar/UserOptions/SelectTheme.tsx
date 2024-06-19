import { useTheme, type Theme } from '@/components/theme-provider';

import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

export function SelectTheme() {
	const { theme, setTheme } = useTheme();

	const handleSelectChange = (selectedTheme: Theme) => {
		setTheme(selectedTheme);
	};

	return (
		<div className="grid grid-cols-3 items-center gap-4">
			<Label htmlFor="width">Tema</Label>
			<Select onValueChange={handleSelectChange} defaultValue={theme}>
				<SelectTrigger className="w-40">
					<SelectValue placeholder={theme}>
						{theme}
					</SelectValue>
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="light">Claro</SelectItem>
					<SelectItem value="dark">Escuro</SelectItem>
					<SelectItem value="system">Sistema</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
