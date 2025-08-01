import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from '@/components/ui/sidebar'
import { sidebarData } from '@/lib/data'
import type { UserProfile } from '@/types/api'
import { Temporal } from '@js-temporal/polyfill'
import { ModeToggle } from './ModeToogle'
import { NavAdmin } from './NavAdmin'
import { NavPlatform } from './NavPlatform'
import { NavUser } from './NavUser'

export const AppSidebar = () => {
	const user: UserProfile = {
		first_name: 'Eric',
		surname: 'Freitas Sampaio',
		username: 'freitaseric',
		email: 'ericfreitas371@gmail.com',
		avatar: '',
		createdAt: Temporal.Now.instant(),
	}

	return (
		<Sidebar variant="inset" collapsible="icon">
			<SidebarHeader>
				<NavUser user={user} />
			</SidebarHeader>
			<SidebarContent className="scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent rounded-lg">
				<NavPlatform items={sidebarData.platform} />
				<NavAdmin items={sidebarData.admin} />
			</SidebarContent>
			<SidebarFooter>
				<ModeToggle />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
