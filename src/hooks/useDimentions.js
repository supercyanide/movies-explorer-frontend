import { useState,useEffect } from "react";

const useDimensions = () => {
    const [width, setWidth] = useState(window.screen.width);

    function listener() {
        setTimeout(() => {
            setWidth(window.screen.width);
        }, 500);
    }

    useEffect(() => {
        window.addEventListener('resize', listener)

        return () => window.removeEventListener('resize', listener)
    }, [])

    return {
        width,
    }
}
export default useDimensions