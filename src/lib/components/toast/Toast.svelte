<script>
	import Close from "./Close.svelte"
	import { toast } from "./toast-store"

	const onClose = () => {
		toast.set({
			visible: false,
			message: "",
		})
	}
</script>

{#if $toast.visible}
	<div
		class="fixed z-10 top-10 inset-x-6 mx-auto bg-red-100 text-red-900 border-l-8 border-red-900 shadow-2xl flex justify-between rounded"
	>
		<div class="p-10">{$toast.message}</div>
		<Close on:click={onClose} />
	</div>
{/if}
