import React from 'react';
import {OverlayAnimationVariants} from "../../animations/Animations"
import {LoadingOverlay} from "./PageTransition.styles";

const PageTransition = () => {
    return (
        <>
            <LoadingOverlay variants={OverlayAnimationVariants} initial="initial" animate="animate" exit="exit"/>
        </>
    );
};

export default PageTransition;