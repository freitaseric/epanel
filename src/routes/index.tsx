import { SidebarTrigger } from '@/components/ui/sidebar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: App,
})

function App() {
	return (
		<div className="text-center">
			<SidebarTrigger />
			<h1>Hello World!</h1>
		</div>
	)
}
