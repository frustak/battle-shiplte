<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit"

    export const load: Load = ({ page }) => {
        const lobbyId = page.params.id

        return { props: { lobbyId } }
    }
</script>

<script lang="ts">
    import type { Schema } from "$lib/schemas"
    import * as navigation from "$app/navigation"
    import { Lobby } from "$lib/api"
    import { onInterval } from "$lib/utils"
    import { user } from "$lib/stores"

    export let lobbyId: number

    let lobby: Schema.Lobby = null

    onInterval(async () => {
        lobby = await Lobby.get(lobbyId)
    })

    const onLeave = async () => {
        await Lobby.leave()
        navigation.goto("/lobby")
    }

    const onStart = async () => {
        await Lobby.start()
        navigation.goto("/game")
    }
</script>

<main class="page-with-action">
    <div>
        <h1 class="text-4xl m-8 p-4 border-b-4 border-blue-400 ">Players</h1>
        {#if lobby}
            {#each lobby.players as player}
                <div class="text-2xl bg-blue-50 rounded p-4 my-4 text-blue-900">
                    {player.username}
                </div>
            {/each}
        {/if}
    </div>

    <div class="flex justify-between">
        <button on:click={onLeave} class="btn-red w-28">Leave</button>
        {#if $user.id === lobby?.host?.id}
            <button
                on:click={onStart}
                disabled={lobby?.players?.length !== 2}
                class="btn-blue w-28"
            >
                Start
            </button>
        {/if}
    </div>
</main>
