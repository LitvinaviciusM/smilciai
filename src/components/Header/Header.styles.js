import styled from 'styled-components';
import {Link} from "gatsby";
import {Hamburger, MainLogo} from "../../assets/svg/icons-and-logos";
import {motion} from "framer-motion";

export const Nav = styled(motion.nav)`
    width: 100%;
    background: ${({scrollNav}) => (scrollNav ? '#ffffff' : 'transparent')};
    z-index: 100;
    position: sticky;
    top: 0;
    transition: 0.3s ease-in-out;
    margin-top: ${props => ('-' + props.theme.navigationHeightMobile)};
  
    @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
        margin-top: ${props => ('-' + props.theme.navigationHeight)};
    }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1.5rem;
  margin: 0 auto;
  min-height: ${props => props.theme.navigationHeightMobile};
  max-width: ${props => props.theme.wrapperWidth};
  
  @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
        min-height: ${props => props.theme.navigationHeight};
    }
`;

export const Logo = styled(MainLogo)`
   height: 64px;
   z-index: 102;
   
   @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
        height: 72px;
    }
`;

export const HeaderLinks = styled(motion.div)`
    z-index: 102;
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
        display: none;
    }
`;

export const NavLink = styled(motion(Link))`
   display: flex;
   align-items: center;
   text-decoration: none;
   height: 100%;
   cursor: pointer;
   -webkit-tap-highlight-color: transparent;
`;

export const Bars = styled(Hamburger)`
   display: none;
   cursor: pointer;
   -webkit-tap-highlight-color: transparent;
   z-index: 103;
   
   @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
   }
`;

