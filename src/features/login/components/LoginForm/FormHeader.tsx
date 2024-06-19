
import { Logo } from '@/components/logo';
import { useOrganizationStore } from '@/store/useOrganizationStore';

export function FormHeader() {
	const { brand } = useOrganizationStore();

	return (
		<div className="flex flex-col space-y-2 text-center">
			<Logo
				src={brand?.assets?.logoUrl}
				className="w-auto h-20 mx-auto mb-6"
			/>
			<h1 className="text-2xl font-semibold tracking-tight">Seja bem-vindo!</h1>
		</div>
	);
}
