import React from "react"
import {Container, Section, SectionWrapper} from "../Layout/Layout.styles";
import ContactsAndMap from "../../constants/ContactsAndMap/ContactsAndMap";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useContactsQuery} from "../../hooks/queries/useContactsQuery";
import {GatsbyImage} from "gatsby-plugin-image";
import {getImage} from "gatsby-plugin-image";

const Contacts = () => {

    const {wpPage: { ACF_HomePage: {contacts: data} }} = useContactsQuery();
    const imageContact = getImage(data.contactImage.localFile);

    return (
        <Section id="/kontaktai/">
            <Container>
                <SectionWrapper>
                    <ContactsAndMap data={data}/>
                        <ImageWrapperOne>
                            <GatsbyImage alt={data.contactImage.altText} image={imageContact}/>
                        </ImageWrapperOne>
                </SectionWrapper>
            </Container>
        </Section>
    )
}

export default Contacts;


const ImageWrapperOne = styled (motion.div)`
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
        grid-column: 8/13;
        margin-bottom: 0;
        height: 100%;
    }
`;