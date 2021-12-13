import styled from "styled-components";
import {motion} from "framer-motion";

export const GalleryWrapper = styled.div`
  border-radius: 5px;
  grid-column: 1/-1;
  justify-self: center;
  width: 100%;
  text-align: left;

  @media screen and (min-width: ${props => props.theme.breakpoints.laptopL}) {
    grid-row: 2/2;
    grid-column: 1/13;
    max-width: 100%;
    margin-top: 128px;
  }
`;

export const ImagesWrapper = styled(motion.div)`
   display: grid;
   grid-gap: 2rem 32px;
   margin-bottom: 5rem;
   grid-template-columns: 1fr;
    
    @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
      grid-gap: 3rem 2rem;
      grid-template-columns: repeat(3, 1fr);
    }
`;

export const ProjectImageWrapper = styled(motion.div)`
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
`;

export const ImageCard = styled.div`
  position: relative;
  line-height: 0.65;
  
  &:nth-child {
    grid-column: span 2;
  }
  
  @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
        &:nth-child(4n+1){
          grid-column: span 2;
        }
        &:nth-child(4n+0){
          grid-column: span 2;
        }
   }
`;