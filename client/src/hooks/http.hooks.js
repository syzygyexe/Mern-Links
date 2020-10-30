import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const request = useCallback(async (url, method = "GET",
        body = null, header = {}) => {
        setLoading(true)
        try {
            // fetch takes url as a first parameter and options as a second parameter
            const response = await fetch(url, {
                method, body, headers
            })
            // parse our response
            const data = await response.json()

            if (!response.ok) {
                // if there is an issue with the response, provide a data.message error. If there is no data.message error, provide a default text
                throw new Error(data.message || "Something went wrong")
            }

            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setEror(e.message)
            throw e
        }
    }, [])

    const clearError = () => setError(null)

    return { loading, request, error }
}
