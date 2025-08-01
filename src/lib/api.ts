import { env } from '@/env'
import type { TokenRecord } from '@/types/api'
import { Temporal } from '@js-temporal/polyfill'
import axios from 'axios'
import { capitalize } from './utils'

// const tokenCookie = await cookieStore.get('token')

export const authClient = axios.create({
	baseURL: `${env.VITE_API_BASE_URL}/auth`,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	timeout: 15000,
})

export const apiClient = axios.create({
	baseURL: env.VITE_API_BASE_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		// Authorization: `Bearer ${tokenCookie?.value}`,
	},
	timeout: 15000,
})

export const isTokenInvalid = async (token: TokenRecord) => {
	const nowInstant = Temporal.Now.instant()
	const expirationInstant = Temporal.Instant.fromEpochMilliseconds(
		token.expires_in * 1000,
	)

	return Temporal.Instant.compare(expirationInstant, nowInstant) < 0
}

export const normalizeServerType = (type: string) => {
	const typeSegments = type.split('-')

	return typeSegments.map(capitalize).join(' ')
}
export const normalizeServerStatus = (status: string) => {
	return capitalize(status.toLowerCase())
}
