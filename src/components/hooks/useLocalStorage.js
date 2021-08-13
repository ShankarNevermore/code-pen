import { useEffect, useState} from 'react'

const PREFIX = 'dyte-prob'

export default function useLocalStorage(key, iniVal) {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if(jsonValue != null) return JSON.parse(jsonValue)

        if(typeof iniVal === 'function') {
            return iniVal()
        } else {
            return iniVal
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}
