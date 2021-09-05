import { writable } from "svelte/store"

export const toast = writable({
    visible: false,
    message: "",
})

export function error(message: string): void {
    toast.set({
        visible: true,
        message,
    })
}

export default {
    error,
}
