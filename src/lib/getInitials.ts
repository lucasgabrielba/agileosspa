export const getInitials = (name: string) => {
	if (!name) return;

	const names = name.split(' ');
	if (names.length === 1) {
		return names[0].substring(0, 2).toUpperCase();
	} else {
		return names.slice(0, 2).map((n) => n[0]).join('').toUpperCase();
	}
};
