<script lang="ts">
	import "../app.postcss"
	import { onMount } from "svelte"
	import * as navigation from "$app/navigation"
	import { User } from "$lib/api"

	let signedIn = false

	onMount(async () => {
		try {
			await User.check_token()
			signedIn = true
			navigation.goto("/lobby")
		} catch {
			signedIn = true
			navigation.goto("/")
		}
	})
</script>

<svelte:head>
	<title>Battle Shiplte</title>
</svelte:head>

{#if signedIn}
	<div class="text-gray-900">
		<slot />
	</div>
{:else}
	Loading...
{/if}
