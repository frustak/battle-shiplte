<script lang="ts">
	import { goto } from "$app/navigation"
	import { handleSubmit } from "$lib/utils"
	import { User } from "$lib/api"
	import { Cookies } from "$lib/utils/cookies"

	type FormValues = { username: string }

	const onSubmit = handleSubmit<FormValues>(async (formValues) => {
		const token = await User.create(formValues)
		Cookies.set("access-token", token.access_token)
		goto("/lobby")
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
			class="p-2 rounded bg-blue-500 text-white transition focus:bg-blue-600"
		>
			Play
		</button>
	</form>
</div>
