import type { Temporal } from '@js-temporal/polyfill'

export interface TokenRecord {
	access_token: string
	refresh_token: string
	expires_in: number
}

export interface UserProfile {
	first_name: string
	surname: string
	username: string
	email: string
	avatar: string
	createdAt: Temporal.Instant
}

export class User implements UserProfile {
	public constructor(profile: UserProfile) {
		Object.assign(this, profile)
	}

	public get fullName(): string {
		return `${this.first_name} ${this.surname}`
	}
}

export interface Server {
	id: string
	name: string
	status: string
	type: string
	ram: {
		allocated: number
		swap: number
	}
	rom: {
		allocated: number
		allow_overlap: boolean
	}
	cpu: {
		allocated: number
		threads_fixed: number[]
		allow_overlap: boolean
	}
}
