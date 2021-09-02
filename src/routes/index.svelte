<script lang="ts">
	const onSubmit = async () => {
		// TODO: Complete user creation
	}
</script>

<div class="p-10">
	<h1 class="font-extralight text-5xl my-20">Battle Shiplte</h1>

	<form on:submit|preventDefault={onSubmit} class="flex flex-col gap-6">
		<input
			type="text"
			name="username"
			placeholder="Username"
			class="p-2 border rounded border-black transition focus:bg-gray-50"
		/>

		<button
			type="submit"
			class="p-2 rounded bg-blue-500 text-white transition hover:bg-blue-600"
		>
			Play
		</button>
	</form>
</div>
