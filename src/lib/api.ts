import ky from "ky"

const api = ky.create({ prefixUrl: import.meta.env.VITE_API_ADDRESS })

export type User = {
	id: number
	username: string
}

export type Token = {
	access_token: string
	token_type: string
	user: User
}

export type Lobby = {
	id: number
	uuid: string
	host: User
	players: User[]
	has_started: boolean
	is_full: boolean
}

export namespace User {
	export async function create(formValues: { username: string }): Promise<Token> {
		const token: Token = await api.post("token", { json: formValues }).json()

		return token
	}
}
