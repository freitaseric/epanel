import { capitalize } from '@/lib/utils'
import { useLocation } from '@tanstack/react-router'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from './ui/breadcrumb'
import { Separator } from './ui/separator'
import { SidebarTrigger } from './ui/sidebar'

export const AppHeader = () => {
	const { pathname } = useLocation()
	const pathSegments = pathname.split('/').filter(Boolean)
	const paths = pathSegments.slice(0, -1)
	const activePath = pathSegments[pathSegments.length - 1] || 'Dashboard'

	return (
		<header className="flex h-16 shrink-0 items-center gap-2">
			<div className="flex items-center gap-2 px-4">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mr-2 data-[orientation=vertical]:h-4"
				/>
				<Breadcrumb>
					<BreadcrumbList>
						{paths.map((path) => (
							<>
								<BreadcrumbItem key={path} className="hidden md:block">
									<BreadcrumbLink href={path}>
										{capitalize(path)}
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator
									key={`${path}-separator`}
									className="hidden md:block"
								/>
							</>
						))}
						<BreadcrumbItem>
							<BreadcrumbPage>{capitalize(activePath)}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</header>
	)
}
