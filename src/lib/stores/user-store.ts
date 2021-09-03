import type { Schema } from "$lib/schemas"
import { writable } from "svelte/store"

export const user = writable<Schema.User>(null)
