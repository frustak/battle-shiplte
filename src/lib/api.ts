import ky from "ky"

const api = ky.create({ prefixUrl: import.meta.env.VITE_API_ADDRESS })

export namespace User {
	type User = {
		id: number
		username: string
	}

	type Token = {
		access_token: string
		token_type: string
		user: User
	}

	export async function create(formValues: { username: string }): Promise<Token> {
		const token: Token = await api.post("token", { json: formValues }).json()

		return token
	}
}
