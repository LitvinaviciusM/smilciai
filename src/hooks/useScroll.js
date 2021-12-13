import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export const useScroll = (thresh = 0.2) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: thresh,
    });

    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start('visible')
        } else {
            animation.start('hidden');
        }
    }, [animation, inView]);

    return [ref, animation]

};