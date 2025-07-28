'use client'

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from '@/components/ui/sidebar'
import { sidebarData } from '@/lib/data'
import { ModeToggle } from './ModeToogle'
import { NavAdmin } from './NavAdmin'
import { NavPlatform } from './NavPlatform'
import { NavUser } from './NavUser'

export const AppSidebar = () => {
	return (
		<Sidebar variant="inset" collapsible="icon">
			<SidebarHeader>
				<NavUser user={sidebarData.user} />
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
