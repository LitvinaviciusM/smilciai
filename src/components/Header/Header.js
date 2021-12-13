import React, {useState, useEffect} from "react"
import {NavContainer, Logo, Bars, HeaderLinks, NavLink} from "./Header.styles";
import Navigation from "../../constants/Navigation/Navigation";
import styled from "styled-components";
import {motion} from "framer-motion";

const Header = ({setMenuState, menuState}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNavColor = () => {
        if(window.scrollY >= 1) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavColor);
    },[]);

    useEffect(() => {
        if (menuState === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    return (
        <Nav changecoloronscroll={scrollNav ? '#ffffff' : 'transparent'}>
            <NavContainer>
                <NavLink to="/" onClick={() => setMenuState(false)}>
                    <Logo/>
                </NavLink>
                <HeaderLinks>
                    <Navigation/>
                </HeaderLinks>
                <Bars
                    className="hovered"
                    isOpen={menuState}
                    onClick={() => setMenuState(!menuState)}
                    role="button"
                    tabIndex="0"
                    onKeyDown={() => setMenuState(!menuState)}
                    color={ "#000000" }
                    whileTap={{ scale: 0.9 }}
                />
            </NavContainer>
        </Nav>
    )
};

export default Header

const Nav = styled(motion.nav)`
    width: 100%;
    background: ${props => props.changecoloronscroll};
    z-index: 100;
    position: sticky;
    top: 0;
    transition: 0.3s ease-in-out;
    margin-top: ${props => ('-' + props.theme.navigationHeightMobile)};
    
    .color {
      background: red;
    }
    
    .transparent {
      background: transparent;
    }
  
    @media screen and (min-width: ${props => props.theme.breakpoints.laptop}) {
        margin-top: ${props => ('-' + props.theme.navigationHeight)};
    }
`;
