export function handleSubmit<T>(onSubmit: (formValues: T) => void): (e: Event) => void {
	const fn = (e: Event) => {
		const formValues = parseRawForm<T>(e)
		onSubmit(formValues)
	}

	return fn
}

export function parseRawForm<T>(e: Event): T {
	const form = e.target as HTMLFormElement
	const formData = new FormData(form)
	const entries = formData.entries()
	const formValues = Object.fromEntries(entries)
	return (formValues as unknown) as T
}
