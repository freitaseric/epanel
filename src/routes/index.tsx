import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: App,
})

function App() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<h1>Hello World!</h1>
		</div>
	)
}
