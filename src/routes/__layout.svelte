<script lang="ts">
	import "../app.postcss"
	import { onMount } from "svelte"
	import * as navigation from "$app/navigation"
	import { User } from "$lib/api"
	import { user } from "$lib/stores"
	import Toast from "$lib/components/toast/Toast.svelte"
	import { Cookies } from "$lib/utils"

	let checked = false

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
		checked = true
	})
</script>

<svelte:head>
	<title>Battle Shiplte</title>
</svelte:head>

{#if checked}
	<div class="text-gray-900">
		<slot />
	</div>
{:else}
	<div class=" flex justify-center items-center mt-20">
		<div class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900" />
	</div>
{/if}

<Toast />
