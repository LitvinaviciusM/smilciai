import React from "react"
import {FooterLink, FooterLogo, FooterSection, FooterCopyright, FooterContainer} from "./Footer.styles";

const Footer = () => {
    return (
        <FooterSection>
                <FooterContainer>
                    <FooterLink to="/">
                        <FooterLogo/>
                    </FooterLink>
                    <FooterCopyright>Copyright &copy; {new Date().getFullYear()} <a href="https://pidea.lt/">Pidea.lt</a> all rights reserved</FooterCopyright>
                </FooterContainer>
        </FooterSection>
    )
}

export default Footer



