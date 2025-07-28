import type { NavItem, User } from '@/types'
import {
	CpuIcon,
	DatabaseIcon,
	HardDriveIcon,
	LayoutDashboardIcon,
	LayoutTemplateIcon,
	NetworkIcon,
	ServerIcon,
	ShieldCheckIcon,
	UsersIcon,
} from 'lucide-react'

export const sidebarData: {
	user: User
	platform: NavItem[]
	admin: NavItem[]
} = {
	user: {
		name: 'Eric Freitas',
		email: 'contato@freitaseric.com',
		avatar: '/avatars/shadcn.jpg',
	},
	platform: [
		{
			title: 'Dashboard',
			url: '/dashboard',
			icon: LayoutDashboardIcon,
		},
		{
			title: 'Servers',
			url: '/servers',
			icon: ServerIcon,
		},
	],
	admin: [
		{
			title: 'Users',
			url: '/admin/users',
			icon: UsersIcon,
		},
		{
			title: 'Infrastructure',
			url: '#',
			icon: ShieldCheckIcon,
			isActive: true,
			items: [
				{
					title: 'Dashboard',
					url: '/admin/infra',
					icon: LayoutDashboardIcon,
				},
				{
					title: 'Servers',
					url: '/admin/infra/servers',
					icon: ServerIcon,
				},
				{
					title: 'Databases',
					url: '/admin/infra/databases',
					icon: DatabaseIcon,
				},
				{
					title: 'Networks',
					url: '/admin/infra/networks',
					icon: NetworkIcon,
				},
				{
					title: 'Storage',
					url: '/admin/infra/storage',
					icon: HardDriveIcon,
				},
				{
					title: 'Templates',
					url: '/admin/infra/templates',
					icon: LayoutTemplateIcon,
				},
				{
					title: 'Nodes',
					url: '/admin/infra/nodes',
					icon: CpuIcon,
				},
			],
		},
	],
} as const
