import styled from "styled-components"
import {motion} from "framer-motion"

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    column-gap: 20px;
    grid-auto-flow: column;
    width: 100%;
    min-height: 100%;
    
`;

export const InformationWrapper = styled (motion.div)`
 grid-column: 1/13;
 align-self: center;
 margin-bottom: 2rem;
 grid-row: 1;
 
  @media screen and (min-width: ${props => props.theme.breakpoints.laptopL}) {
        grid-column: 8/13;
        margin-bottom: 0;
    }
 
`;

export const ImageWrapperOne = styled (motion.div)`
    grid-column: 1/13;
    align-self: center;
    position: relative;
    z-index: 1;
    
    .gatsby-image-wrapper {
        position: initial;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.starter}) {
      padding-top: 30%;
      height: 100%;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.phone}) {
      padding-top: 0%;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.laptopL}) {
        grid-column: 1/3;
        margin-bottom: 0;
        height: 50%;
    }
`;

export const ImageWrapperTwo = styled(motion.div)`
    grid-column: 1/13;
    align-self: center;
    position: relative;
    z-index: 1;
    
    .gatsby-image-wrapper {
        position: initial;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.starter}) {
      padding-top: 30%;
      height: 100%;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.phone}) {
      padding-top: 0%;
    }
  @media screen and (min-width: ${props => props.theme.breakpoints.laptopL}) {
        grid-column: 3/7;
        padding-top: 60%;
    }
`;









