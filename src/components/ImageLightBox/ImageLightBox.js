import React from "react";
import styled from "styled-components";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {motion} from "framer-motion";

const ImageLightBox = ({
                   clickedImg,
                   setClickedImg,
                   handelRotationRight,
                   handelRotationLeft
               }) => {


    return (
        <>
            <LightBoxOverlay>
                    <ProjectImageWrapper>
                        <GatsbyImage image={getImage(clickedImg.localFile)} alt={clickedImg.altText} />
                    </ProjectImageWrapper>
                <button onClick={() => setClickedImg(null)} onKeyDown={() => setClickedImg(null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
                </button>
                <LightBoxOverlayArrowLeft onClick={handelRotationLeft}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                </LightBoxOverlayArrowLeft>
                <LightBoxOverlayArrowRight onClick={handelRotationRight}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                </LightBoxOverlayArrowRight>
            </LightBoxOverlay>
        </>
    );
};

export default ImageLightBox;

const ProjectImageWrapper = styled(motion.div)`
    .gatsby-image-wrapper {
        position: initial;
    }
`;

const LightBoxOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(27, 27, 27, 0.8);
    display: flex;
    align-items: center;
    z-index: 1000000;
    
    img {
        display: flex;  
        max-width: 80%;
        height: auto;
        margin: auto;
    }
    
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 30px;
        background-color: rgba(0,0,0,0.25);
        fill: #fff;
        z-index: 999;
        cursor: pointer;
        border-color: transparent;
        width: 48px;
        height: 48px;
        
        svg {
          width: 24px;
          height: 24px;
        }
    }
`;

const LightBoxOverlayArrowLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 48%;
    left: 24px;
    width: 48px;
    height: 48px;
    z-index: 999;
    background-color: rgba(255,255,255,0.25);
    cursor: pointer;
    
    svg {
      width: 24px;
      height: 24px;
    }
`;

const LightBoxOverlayArrowRight = styled.div`
    display: flex;
    background-color: rgba(255,255,255,0.25);
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 24px;
    width: 48px;
    height: 48px;
    top: 48%;
    z-index: 999;
    cursor: pointer;
    
    svg {
      width: 24px;
      height: 24px;
    }
`;