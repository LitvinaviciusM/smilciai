import styled from "styled-components";
import {motion} from "framer-motion";

export const LoadingOverlay = styled(motion.div)`
        height: 100vh;
        width: 100vw;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 100000;
        background: #edd9c0;
`;