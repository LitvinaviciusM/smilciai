import styled from "styled-components";
import {motion} from "framer-motion";

export const Overlay = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 98;
  box-sizing: border-box;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        display: none;
    }
`;

export const SidebarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem;
    position: relative;
    background: ${props => props.theme.white};
    height: 100vh;
    overflow: hidden;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarSocialLinks = styled.div`
  margin-top: 3rem;
  ul {
    justify-content: center;
  }
  a {
   fill: ${props => props.theme.black};
  }
`;

export const SidebarLinks = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  li {
    margin-left: 0;
    margin-bottom: 1rem;
    font-size: 21px;
  }
`