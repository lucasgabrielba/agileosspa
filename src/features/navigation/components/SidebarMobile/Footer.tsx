import * as packageInfo from '@/../package.json';

import { UserOptions } from '../Sidebar/UserOptions/UserOptions';

export function NavFooter() {
	return (
		<footer className="mt-auto">
			<ul className="flex flex-col gap-4">
				<li>
					<UserOptions />
				</li>
				<li>
					<div className="flex w-full h-10 justify-start items-center text-center">
						<small>{packageInfo.version}</small>
					</div>
				</li>
			</ul>
		</footer>
	);
}
