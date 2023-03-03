export const justNumber = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value
    value = value.replace(/[a-z!@#¨$%^&*)(=_]+/g, "")

    e.currentTarget.value = value
    return e
}