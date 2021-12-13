import styled from "styled-components"
import {motion} from "framer-motion";
import {GatsbyImage} from "gatsby-plugin-image";
import {Ahref} from "../Layout/Layout.styles";

export const HeroSection = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh)*100);
    background: ${props => props.theme.white};
    z-index: 10;
    padding-top: ${props => props.theme.navigationHeightMobile};;
    
    @media screen and (min-width: ${props => props.theme.breakpoints.laptopL}) {
        padding-top: 0px;
    }
`;

export const HeroWrapper = styled.div`
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
 margin-bottom: 4rem;
 z-index: 5;
 
 @media screen and (min-width: ${props => props.theme.breakpoints.phone}) {
         margin-top: 3rem;
    }
  
  @media screen and (min-width: ${props => props.theme.breakpoints.laptopL}) {
        grid-column: 1/6;
        margin-bottom: 0rem;
        margin-top: 0;
    }
 
`;

export const HeroImage = styled(motion.div)`
    grid-column: 1/13;
    align-self: center;
    position: relative;
    z-index: 3;
    
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
        grid-column: 7/13;
        padding-top: 30%;
    }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        flex-direction: row;
    }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.5rem;
  margin-bottom: 0.75rem;

  
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        flex-direction: row;
        margin-bottom: 0;
    }
`;

export const ContactIcon = styled(motion.div)`
  transform: translateY(-2px);
  padding: 0;
  margin-right: 0.75rem;
  display: flex;
  width: 24px;
  img {
    width: 32px;
  }
`;

export const HeroContactLink = styled(Ahref)`
  color: ${props => props.theme.black};
`

export const BackgroundImage = styled(motion.div)`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    opacity: 0.1;
    z-index: 1;
    
    @media screen and (min-width: ${props => props.theme.breakpoints.laptopL}) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        opacity: 1;
    }
`;

export const HeroBackgroundImage = styled(GatsbyImage)`
    position: absolute;
    height: 100vh;
    height: calc(var(--vh, 1vh)*100);
    width: 100vw;
    object-fit: cover;
    opacity: 0.5;
    z-index: 1;
`;

export const BackgroundColor = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    height: 100vh;
    height: calc(var(--vh, 1vh)*100);
    background: white;
    width: 56vw;
    object-fit: cover;
    opacity: 1;
    z-index: 2;
`;









