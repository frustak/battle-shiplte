import ky from "ky"
import type { Schema } from "./schemas"

const api = ky.create({ prefixUrl: import.meta.env.VITE_API_ADDRESS })

export namespace User {
	export async function create(formValues: { username: string }): Promise<Schema.Token> {
		const token: Schema.Token = await api.post("token", { json: formValues }).json()

		return token
	}
}

export namespace Lobby {
	export async function create(): Promise<Schema.Lobby> {
		const lobby: Schema.Lobby = await api.post("lobby").json()

		return lobby
	}
}
