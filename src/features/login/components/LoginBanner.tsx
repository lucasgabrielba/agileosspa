import { useOrganizationStore } from '@/store/useOrganizationStore';
import { type ComponentProps, useEffect, useState } from 'react';


type LoginBannerProps = {
	src: string;
};

export function LoginBanner({ src }: LoginBannerProps & ComponentProps<'img'>) {
	const { brand } = useOrganizationStore();

	const [source, setSource] = useState(src);

	function handleError() {
		setSource('https://placehold.co/436x518/transparent/transparent');
	}

	useEffect(() => {
		if (brand) {
			setSource(brand.assets?.login?.bannerUrl || src);
		}
	}, [brand, src]);

	return (
		<div className="relative flex-col hidden h-full p-10 text-white bg-muted lg:flex dark:border-r">
			<div className="absolute inset-0 z-20 flex items-center text-lg font-medium">
				<img src={source} className="w-full h-full" onError={handleError} />
			</div>
		</div>
	);
}
