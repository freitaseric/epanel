import { type TokenRecord, User, type UserProfile } from '@/types/api'
import { useCallback, useState } from 'react'
import { apiClient } from '../lib/api'

export const useAuth = () => {
	const [_tokenRecord, _setTokenRecord] = useState<TokenRecord>()
	const [user, _setUser] = useState<User>()

	const _fetchUserProfile = useCallback(async () => {
		if (!_tokenRecord) return

		const { data: userProfile } = await apiClient.get<UserProfile>(
			'/auth/profile',
			{
				headers: {
					Authorization: `Bearer ${_tokenRecord.access_token}`,
				},
			},
		)

		return userProfile
	}, [_tokenRecord])

	const signIn = useCallback(
		async (username: string, password: string) => {
			const { data: token } = await apiClient.post<TokenRecord>('/auth/login', {
				username,
				password,
			})

			_setTokenRecord(token)

			await cookieStore.set({
				name: 'token',
				value: JSON.stringify(token),
			})

			const userProfile = await _fetchUserProfile()
			if (userProfile) _setUser(new User(userProfile))
		},
		[_fetchUserProfile],
	)

	const signUp = useCallback(
		async (
			name: string,
			surname: string,
			username: string,
			email: string,
			password: string,
		) => {
			const { data: token } = await apiClient.post<TokenRecord>(
				'/auth/register',
				{
					name,
					surname,
					username,
					email,
					password,
				},
			)

			_setTokenRecord(token)

			await cookieStore.set({
				name: 'token',
				value: JSON.stringify(token),
			})

			const userProfile = await _fetchUserProfile()
			if (userProfile) _setUser(new User(userProfile))
		},
		[_fetchUserProfile],
	)

	const refresh = useCallback(async () => {
		const { data: token } = await apiClient.post<TokenRecord>('/auth/refresh', {
			refresh_token: _tokenRecord?.refresh_token,
		})

		_setTokenRecord(token)

		await cookieStore.set({
			name: 'token',
			value: JSON.stringify(token),
		})

		const userProfile = await _fetchUserProfile()
		if (userProfile) _setUser(new User(userProfile))
	}, [_fetchUserProfile, _tokenRecord])

	return { user, signIn, signUp, refresh }
}
