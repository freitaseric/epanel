export interface NavItem {
	title: string
	url: string
	icon?: LucideIcon
	isActive?: boolean
	items?: {
		title: string
		url: string
		icon?: LucideIcon
	}[]
}

export interface Project {
	name: string
	url: string
	icon: LucideIcon
}
