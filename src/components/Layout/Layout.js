import React, {useState, useEffect} from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar";
import { GlobalStyles, theme, PageWrapper, ContentWrap } from "./Layout.styles";
import {ThemeProvider} from "styled-components";
import {GlobalFonts} from "../../assets/fonts/GlobalFonts";

const Layout = ({ children }) => {

    const [menuState, setMenuState] = useState(false);

    useEffect(() => {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, []);

        return (
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <GlobalFonts/>
                <PageWrapper>
                    <ContentWrap>
                        <Header menuState={menuState} setMenuState={setMenuState}/>
                        <Sidebar menuState={menuState} setMenuState={setMenuState}/>
                        <main>{children}</main>
                    </ContentWrap>
                    <Footer />
                </PageWrapper>
            </ThemeProvider>
        )
};

export default Layout

