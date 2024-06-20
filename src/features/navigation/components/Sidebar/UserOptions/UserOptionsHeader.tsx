import { useUserStore } from "@/store/useUserStore";

export function UserOptionsHeader() {
	const { user } = useUserStore();

	return (
		<div className="space-y-2">
			<h4 className="font-medium leading-none">
				<span>{user?.name}</span>
			</h4>
		</div>
	);
}
