<script lang="ts">
	type ButtonType = "button" | "submit"

	export let type: ButtonType = "button"
	export let disabled = false
</script>

<button
	{type}
	{disabled}
	class="p-2 rounded bg-blue-500 text-white transition focus:bg-blue-600 disabled:bg-gray-400 disabled:cursor-wait"
>
	<slot />
</button>
