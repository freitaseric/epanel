import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function nameFallback(name: string) {
	const initials = name
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase())
		.join('')
	return initials.length > 2 ? initials.slice(0, 2) : initials
}
