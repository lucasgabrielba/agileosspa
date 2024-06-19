import * as packageInfo from '@/../package.json';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useSidebar } from './sidebar-store';

import { Button } from '@/components/ui/button';

import { UserOptions } from './UserOptions/UserOptions';

export function NavFooter() {
	const { isOpen, toggleOpen } = useSidebar();

	return (
		<footer className="mt-auto">
			<ul className="flex flex-col gap-4">
				<li className="ml-1">
					<UserOptions />
				</li>
				<li className="ml-1">
					<Button
						variant="link"
						className="text-primary-foreground"
						onClick={toggleOpen}
					>
						{isOpen && (
							<>
								<ChevronLeft className="size-5" />
								<span
									data-hidden={!isOpen}
									className="data-[hidden=true]:hidden"
								>
									Collapse Sidebar
								</span>
							</>
						)}
						{!isOpen && <ChevronRight className="size-5" />}
					</Button>
				</li>
				<li>
					<div className="flex items-center justify-center w-full h-10 text-center">
						<small>{packageInfo.version}</small>
					</div>
				</li>
			</ul>
		</footer>
	);
}
