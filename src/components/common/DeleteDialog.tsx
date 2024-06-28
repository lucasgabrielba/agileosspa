import * as React from 'react';

import { api } from '@/config/api';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { useOrganizationStore } from '@/store/useOrganizationStore';

interface DeleteDialogProps {
	children: React.ReactNode;
	itemsIds: string[];
  entity: string;
	setRowSelection?: (selection: object) => void;
}

export function DeleteDialog({
  children,
  itemsIds,
  entity,
  setRowSelection,
}: DeleteDialogProps) {

	const { organization } = useOrganizationStore();
	const [isDeleting, setIsDeleting] = React.useState(false);

	const handleDelete = async () => {
		setIsDeleting(true);
		try {
			await api.post(
				`organizations/${organization.id}/${entity}/bulk-delete`,
				{ itemsIds: itemsIds },
			);
			setRowSelection && setRowSelection({});
		} catch (error) {
			console.error('Error:', error);
		}
		setIsDeleting(false);
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Tem certeza da exclusão?</AlertDialogTitle>
					<AlertDialogDescription>
						Esta ação não pode ser desfeita.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction
						onClick={handleDelete}
						disabled={isDeleting}
						className={`bg-destructive hover:bg-destructive-foreground hover:text-destructive`}
					>
						{isDeleting ? 'Excluindo...' : 'Excluir'}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
