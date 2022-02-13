import styled, {css, createGlobalStyle} from "styled-components";
import normalize from "styled-normalize";
import {motion} from "framer-motion";
import { Link } from "gatsby";
import {Link as LinkScroll} from "react-scroll"

export const theme = {
  black: '#000000',
  white: '#ffffff',
  primary: '#edd9c0',
  primaryHover: '#ccbca5',
  primaryLight: '#f9f9f9',
  secondary: '#D1EDF5',
  secondaryHover: '#90A3A8',
  gray900: '#666666',
  gray600: '#B2B2B2',
  wrapperWidth: '1440px',
  navigationHeight: '128px',
  navigationHeightMobile: '112px',
  breakpoints: {
    starter: '0px',
    xs: '320px',
    phone: '425px',
    tablet: '768px',
    laptop: '992px',
    laptopL: '1200px',
    desktop: '1440px',
    desktopL: '1920px',
  },
};

export const MainFont = 'Mont';

export const GlobalStyles = createGlobalStyle`
  
  ${normalize}
  
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  html {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${MainFont}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.white};
    line-height: 1.65;
    font-size: 0.875rem;
    overscroll-behavior: none;
    overflow-x: hidden;
    overflow: auto/scroll;
    max-width: 100%;
  }
  
  ul {
    list-style: none;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: clamp(0.875rem, 3vw, 1.125rem);
    line-height: clamp(1.5rem, 3vw, 2rem);
    margin: 0 0 2.5rem 0;
    color: ${props => props.theme.gray900}
  }
  
  li {
    font-size: clamp(0.875rem, 5vw, 1.125rem);
    line-height: clamp(1.5rem, 5vw, 2rem);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${MainFont};
    font-weight: 600;
    letter-spacing: -1px;
    text-align: left;
  }
  
  h1 {
    font-size: clamp(2.5rem, 7vw, 3.5rem);
    line-height: clamp(3.5rem, 7vw, 4.5rem);
    margin: 0 0 1.5rem 0;
  }
  
   h2 {
    font-size: clamp(2rem, 7vw, 3rem);
    line-height: clamp(3rem, 7vw, 4rem);
    margin-bottom: 2rem;
  }
  
  h3 {
    font-size: clamp(1.5rem, 7vw, 2.5rem);
    line-height: clamp(2.5rem, 7vw, 3.5rem);
    margin-bottom: 2rem;
  }
  
  h4 {
    font-size: clamp(1.25rem, 7vw, 2rem);
    line-height: clamp(2rem, 7vw, 3rem);
    margin-bottom: 1rem;
  }
  
  h5 {
    font-size: clamp(1.125rem, 7vw, 1.5rem);
    line-height: clamp(2rem, 7vw, 2.5rem);
    margin-bottom: 1rem;
  }
  
  h6 {
    font-size: clamp(1rem, 7vw, 1.25rem);
    line-height: clamp(1.5rem, 7vw, 2rem);
  }
 
  
  .gatsby-image-wrapper-constrained {
    display: flex;
  }
`;

export const ReactLink = styled(motion(Link))`
    -webkit-tap-highlight-color: transparent;
`;

export const Ahref = styled(motion.a)`
    -webkit-tap-highlight-color: transparent;
`;

export const Container = styled(motion.div)`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  max-width: ${props => props.theme.wrapperWidth};
  height: 100%;
  padding: 0 1.5rem;
  
  
  ${props => props.fluid &&
    css`
      padding: 0;
      margin: 0;
      background: red;
      max-width: 100% !important;
    `}
  
  ${props => props.alignCenter &&
    css`
      display:flex;
      align-items: center;
    `}
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
`;

export const ContentWrap = styled.div`
  flex: 1; 
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `};
`;

export const ButtonLink = styled(Link)`
  display: inline-block;
  background: ${props => props.theme.primary};
  white-space: nowrap;
  padding: 0.75rem 2rem;
  color: ${props => props.theme.black};
  font-size: clamp(0.875rem, 5vw, 1.125rem);
  line-height: clamp(2rem, 5vw, 2rem);
  font-weight: 600;
  outline: none;
  border: none;
  min-width: 50px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  -webkit-tap-highlight-color: transparent;
  transition: 100ms;
  
  &:hover {
    background: ${props => props.theme.primaryHover};
    transition: 100ms;
  }
`;

export const ButtonScroll = styled(LinkScroll)`
  display: inline-block;
  background: ${props => props.theme.primary};
  white-space: nowrap;
  padding: 0.75rem 2rem;
  color: ${props => props.theme.black};
  font-size: clamp(0.875rem, 5vw, 1.125rem);
  line-height: clamp(2rem, 5vw, 2rem);
  font-weight: 600;
  outline: none;
  border: none;
  min-width: 50px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  -webkit-tap-highlight-color: transparent;
  transition: 100ms;
  
  &:hover {
    background: ${props => props.theme.primaryHover};
    transition: 100ms;
  }
`;

export const ButtonSubmit = styled(motion.button)`
  display: inline-block;
  background: ${props => props.theme.primary};
  white-space: nowrap;
  padding: 0.75rem 2rem;
  color: ${props => props.theme.black};
  font-size: clamp(0.875rem, 5vw, 1.125rem);
  line-height: clamp(2rem, 5vw, 2rem);
  font-weight: 600;
  outline: none;
  border: none;
  min-width: 50px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  -webkit-tap-highlight-color: transparent;
  transition: 100ms;
  
  &:hover {
    background: ${props => props.theme.primaryHover};
    transition: 100ms;
  }
`;

export const Section = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh)*100);
    background: ${props => props.theme.white};
    margin-top: 4rem;
`;

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    row-gap: 2rem;
    grid-auto-flow: column;
    width: 100%;
    min-height: 100%;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        column-gap: 20px;
    }
`;

export const NavScrollLink = styled(LinkScroll)`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &.active {
    color: ${props => props.theme.primaryHover};
  }
`;

export const PrimaryDot = styled.span`
  color: ${props => props.theme.primary}
`;

export const PrimaryColor = styled.span`
  color: ${props => props.theme.primary}
`;

