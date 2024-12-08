import {useState, useEffect} from 'react'

function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{width: number, height: number}>({width: window.innerWidth, height: window.innerHeight});

    useEffect(()=>{
        const handleResize = () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        }
        window.addEventListener('resize', handleResize);

        // Un-mount
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowSize;
}

export default useWindowSize