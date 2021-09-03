<script lang="ts">
	import * as navigation from "$app/navigation"
	import { handleSubmit } from "$lib/utils"
	import { User } from "$lib/api"
	import { Cookies } from "$lib/utils/cookies"

	let submitting = false

	type FormValues = { username: string }
	const onSubmit = handleSubmit<FormValues>(async (formValues) => {
		submitting = true
		const token = await User.create(formValues)
		Cookies.set("access-token", token.access_token)
		submitting = false
		navigation.goto("/lobby")
	})
</script>

<div class="p-10">
	<h1 class="font-extralight text-5xl my-20">Battle Shiplte</h1>

	<form on:submit|preventDefault={onSubmit} class="flex flex-col gap-6">
		<input
			type="text"
			name="username"
			placeholder="Username"
			required
			class="p-2 border rounded border-black transition focus:bg-gray-100"
		/>

		<button
			type="submit"
			disabled={submitting}
			class="p-2 rounded bg-blue-500 text-white transition focus:bg-blue-600 disabled:bg-gray-400 disabled:cursor-wait"
		>
			Play
		</button>
	</form>
</div>
