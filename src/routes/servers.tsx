import { Button } from '@/components/ui/button'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { queryClient } from '@/integrations/tanstack-query/root-provider'
import {
	apiClient,
	normalizeServerStatus,
	normalizeServerType,
} from '@/lib/api'
import type { Server } from '@/types/api'
import {
	queryOptions,
	useQueryErrorResetBoundary,
	useSuspenseQuery,
} from '@tanstack/react-query'
import {
	type ErrorComponentProps,
	createFileRoute,
	useRouter,
} from '@tanstack/react-router'
import {
	CpuIcon,
	HardDriveIcon,
	MemoryStickIcon,
	PauseIcon,
	PlayIcon,
} from 'lucide-react'
import { useEffect } from 'react'

const serversQueryOptions = queryOptions({
	queryKey: ['servers'],
	queryFn: async () => {
		const response = await apiClient.get<Server[]>('/servers')

		return response.data
	},
})

export const Route = createFileRoute('/servers')({
	component: ServersPage,
	loader: () => queryClient.ensureQueryData(serversQueryOptions),
	pendingComponent: LoadingLayout,
	errorComponent: ErrorBoundary,
})

function ServersPage() {
	const { data: servers } = useSuspenseQuery(serversQueryOptions)
	return (
		<div className="flex flex-1 flex-col gap-12 p-4 pt-0">
			<h1 className="text-xl font-bold">Your Servers</h1>
			<div className="flex flex-row flex-wrap items-center justify-center gap-6 w-full">
				{servers.map((server) => (
					<Card key={server.id} className="w-80">
						<CardHeader>
							<CardTitle>{server.name}</CardTitle>
							<CardDescription>
								{normalizeServerType(server.type)}
							</CardDescription>
							<CardAction>
								{server.status !== 'PROVISIONING' && (
									<Button variant="ghost" size="icon">
										{server.status === 'STOPPED' && <PlayIcon />}
										{server.status === 'RUNNING' && <PauseIcon />}
									</Button>
								)}
							</CardAction>
						</CardHeader>
						<CardContent>
							<ul className="flex flex-col gap-3">
								<li className="flex flex-row items-center gap-2">
									<CpuIcon />
									<span>0/{server.cpu.allocated} (%)</span>
								</li>
								<li className="flex flex-row items-center gap-2">
									<MemoryStickIcon />
									<span>0/{server.ram.allocated} (MB)</span>
								</li>
								<li className="flex flex-row items-center gap-2">
									<HardDriveIcon />
									<span>0/{server.rom.allocated} (MB)</span>
								</li>
							</ul>
						</CardContent>
						<CardFooter>
							<p>{normalizeServerStatus(server.status)}</p>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}

function LoadingLayout() {
	return (
		<main className="flex flex-1 items-center justify-center">
			<Skeleton className="size-11/12" />
		</main>
	)
}

function ErrorBoundary({ error }: ErrorComponentProps) {
	const router = useRouter()
	const queryErrorResetBoundary = useQueryErrorResetBoundary()

	useEffect(() => {
		queryErrorResetBoundary.reset()
	}, [queryErrorResetBoundary])

	return (
		<main className="flex flex-1 items-center justify-center flex-col gap-6">
			<div className="flex items-center justify-center flex-col gap-2">
				<h1 className="text-xl font-bold">{error.name}</h1>
				<p>{error.message}</p>
			</div>
			<Button
				onClick={() => {
					router.invalidate()
				}}
			>
				Retry
			</Button>
		</main>
	)
}
