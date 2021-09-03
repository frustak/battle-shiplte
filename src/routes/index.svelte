<script lang="ts">
	import * as navigation from "$app/navigation"
	import { handleSubmit, Cookies } from "$lib/utils"
	import { User } from "$lib/api"
	import { user } from "$lib/stores"

	let submitting = false

	type FormValues = { username: string }

	const onSubmit = handleSubmit<FormValues>(async (formValues) => {
		submitting = true
		const token = await User.create(formValues)
		user.set(token.user)
		Cookies.set("access-token", token.access_token)
		submitting = false
		navigation.goto("/lobby")
	})
</script>

<main class="p-10">
	<h1 class="font-extralight text-5xl my-20">Battle Shiplte</h1>

	<form on:submit|preventDefault={onSubmit} class="flex flex-col gap-6">
		<input
			type="text"
			name="username"
			placeholder="Username"
			required
			class="p-2 border rounded border-black transition focus:bg-gray-100"
		/>

		<button type="submit" disabled={submitting} class="btn-blue">Play</button>
	</form>
</main>
