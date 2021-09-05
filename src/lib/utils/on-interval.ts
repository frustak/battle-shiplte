import { onDestroy, onMount } from "svelte"

export function onInterval(callback: () => void, milliseconds = 5000): void {
    onMount(callback)

    const interval = setInterval(callback, milliseconds)

    onDestroy(() => {
        clearInterval(interval)
    })
}
