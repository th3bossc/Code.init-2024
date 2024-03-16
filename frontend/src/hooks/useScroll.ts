import { RefObject, useEffect, useState } from 'react';

const useScrollPoition = ({
    ref
}: {
    ref: RefObject<HTMLElement | null>
}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [height, setHeight] = useState(ref.current?.scrollHeight || 0);
    const [windowHeight, setWindowHeight] = useState(0);
    useEffect(() => {
        const updatePosition = () => {
            if (ref.current && window) {
                setScrollPosition(ref.current.getBoundingClientRect().top);
                setHeight(ref.current.scrollHeight);
                setWindowHeight(window.innerHeight)
            }
        }

        window?.addEventListener('scroll', updatePosition);
        updatePosition();

        return () => {
            if (window)
                window.removeEventListener('scroll', updatePosition);
        }
    }, [ref])

    return { scrollPosition, height, windowHeight };
}

export default useScrollPoition;