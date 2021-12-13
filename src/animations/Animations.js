export const OverlayAnimationVariants = {
    initial: {
        height: '100%',
    },
    animate: {
        height: 0,
        top: 0,
        transition: {
            delay: 0.5,
            duration: 0.6
        }
    },
    exit: {
        height: '100%',
        top: 0,
        transition: {
            duration: 0.6
        }
    },
};

export const variants = {
    visible: {
        transition: {
        },
    },
};

export const durationDefault = {
    duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9]
};

export const HeroHeading = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {delay: 0.6, durationDefault},
    },
    hidden: {opacity: 0, y: 20},
};

export const HeroText = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {delay: 0.8, durationDefault},
    },
    hidden: {opacity: 0, y: 20},
};

export const HeaderFadeIn = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {delay: 1, durationDefault}
    },
    hidden: {
        opacity: 0,
        transition: {durationDefault}
    },
    exit:{
        opacity: 0,
        transition: {durationDefault}
    }
};

export const ServicesSlideRight = {
    visible: {
        width: '100%', transition: {duration: 1, ease: [0.6, 0.05, -0.01, 0.9]},
    },
    hidden: {width: '0%'},
};

export const ServicesOpacity = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {delay: 0.8, durationDefault}
    },
    hidden: {opacity: 0},
};

export const ServicesMainText = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {delay: 0.4, duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9]},
    },
    hidden: {opacity: 0, y: 20},
};

export const ServicesSubText = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {delay: 0.6, duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9]},
    },
    hidden: {opacity: 0, y: 20},
};


export const opacity = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {delay: 1, durationDefault}
    },
    hidden: {opacity: 0},
};

export const mainText = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {durationDefault},
    },
    hidden: {opacity: 0, y: 20},
};

export const subText = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {delay: 0.2, durationDefault},
    },
    hidden: {opacity: 0, y: 20},
};

export const sliderRightTwo = {
    visible: {
        width: '100%', transition: {delay: 0.2, duration: 1, ease: [0.6, 0.05, -0.01, 0.9]},
    },
    hidden: {width: '0%'},
};

export const sliderAbout = {
    visible: {
        x: '0',
        transition: {delay: 0.2, duration: 1, ease: [0.6, 0.05, -0.01, 0.9]},
    },
    hidden: {x: '-100%'},
};

export const mainTextTwo = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {delay: 1, durationDefault},
    },
    hidden: {opacity: 0, y: 20},
};

export const opacityTwo= {
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 1.4, durationDefault},
    },
    hidden: {opacity: 0},
};

export const ShowLineAnimation = {
    hidden: {
        width: 0
    },
    visible: {
        width: 40,
        transition: {
            delay: 0.8,
            duration: 0.8
        }
    }
};

export const ScrollDownAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 100,
        transition: {
            delay: 0.8,
            duration: 5
        }
    }
};

export const footerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.2
        },
    },
};