import { useEffect } from "react"

const useTimeout = (callback, timeout) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            callback()
        }, timeout)
        return () => clearTimeout(timer)
    }, [])

}

export default useTimeout