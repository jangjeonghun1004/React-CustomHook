import { useState, useEffect } from "react"

function useFetch(url: string, setData: any) {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return {loading, error};
}

export default useFetch