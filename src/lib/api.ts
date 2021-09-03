import ky from "ky"
import type { Schema } from "./schemas"
import { Cookies } from "./utils"

const api = ky.create({
	prefixUrl: import.meta.env.VITE_API_ADDRESS,
	hooks: {
		beforeRequest: [
			(request) => {
				const accessToken = Cookies.get("access-token")
				if (accessToken) request.headers.set("Authorization", `bearer ${accessToken}`)
			},
		],
	},
})

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

	export async function list(): Promise<Schema.Lobby[]> {
		const lobbies: Schema.Lobby[] = await api.get("lobby").json()

		return lobbies
	}

	export async function join(uuid: string): Promise<Schema.Lobby> {
		const lobby: Schema.Lobby = await api.put("join-lobby", { json: { uuid } }).json()

		return lobby
	}

	export async function get(id: number): Promise<Schema.Lobby> {
		const lobby: Schema.Lobby = await api.get(`lobby/${id}`).json()

		return lobby
	}

	export async function leave(): Promise<void> {
		await api.put("leave-lobby")
	}

	export async function start(): Promise<void> {
		await api.put("start-lobby")
	}
}
