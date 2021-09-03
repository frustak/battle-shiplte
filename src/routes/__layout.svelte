<script lang="ts">
	import "../app.postcss"
	import { onMount } from "svelte"
	import * as navigation from "$app/navigation"
	import { User } from "$lib/api"
	import { user } from "$lib/stores"
	import Toast from "$lib/components/toast/Toast.svelte"

	let signedIn = false

	onMount(async () => {
		try {
			const checked_user = await User.check_token()
			user.set(checked_user)
			signedIn = true
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

<Toast />
