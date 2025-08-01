import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx'

import { AppHeader } from '@/components/AppHeader.tsx'
import { AppSidebar } from '@/components/AppSidebar.tsx'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar.tsx'
import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
	queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: () => (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<AppHeader />
				<Outlet />
			</SidebarInset>
			{/* Devtools for debugging the router */}

			{process.env.NODE_ENV !== 'production' && <TanStackRouterDevtools />}
			{process.env.NODE_ENV !== 'production' && <TanStackQueryLayout />}
		</SidebarProvider>
	),
})
