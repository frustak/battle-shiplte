<script lang="ts">
	import "../app.postcss"
	import { onMount } from "svelte"
	import * as navigation from "$app/navigation"
	import { User } from "$lib/api"
	import { user } from "$lib/stores"
	import Toast from "$lib/components/toast/Toast.svelte"
	import { Cookies } from "$lib/utils"

	let signedIn = false

	onMount(async () => {
		const accessToken = Cookies.get("access-token")
		if (accessToken) {
			try {
				const checked_user = await User.check_token()
				user.set(checked_user)
			} catch {
				navigation.goto("/")
			}
		}
		signedIn = true
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
