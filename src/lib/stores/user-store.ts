import type { User } from "$lib/api"
import { writable } from "svelte/store"

export const user = writable<User>(null)
