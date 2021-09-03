<script lang="ts">
	import type { Schema } from "$lib/schemas"
	import * as navigation from "$app/navigation"
	import { Cookies, onInterval } from "$lib/utils"
	import { Lobby } from "$lib/api"

	let lobbies: Schema.Lobby[] = []

	onInterval(async () => {
		lobbies = await Lobby.list()
	})

	const onJoinLobby = async (uuid: string) => {
		const lobby = await Lobby.join(uuid)
		navigation.goto(`/lobby/${lobby.id}`)
	}

	const onLogout = () => {
		Cookies.remove("access-token")
		navigation.goto("/")
	}

	const onNewLobby = async () => {
		const lobby = await Lobby.create()
		navigation.goto(`/lobby/${lobby.id}`)
	}
</script>

<main class="page-with-action">
	<div class="flex flex-col gap-4 overflow-auto px-3">
		{#each lobbies as lobby}
			<div class="flex justify-between items-stretch bg-gray-100 rounded">
				<span class="pl-6 self-center">
					{lobby.host.username}
				</span>
				<button
					on:click={() => onJoinLobby(lobby.uuid)}
					disabled={lobby.is_full}
					class="btn-blue p-4">Join</button
				>
			</div>
		{/each}
	</div>

	<div class="flex justify-between">
		<button on:click={onLogout} class="btn-red w-28">Logout</button>
		<button on:click={onNewLobby} class="btn-blue w-28">New Lobby</button>
	</div>
</main>
