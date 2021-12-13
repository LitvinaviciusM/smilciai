import React from "react"
import ContactForm from "../../constants/ContactForm/ContactForm"
import {Container, Section, SectionWrapper} from "../Layout/Layout.styles";
import ContactsAndMap from "../../constants/ContactsAndMap/ContactsAndMap";

const Contacts = () => {
    return (
        <Section id="/kontaktai/">
            <Container>
                <SectionWrapper>
                    <ContactForm/>
                    <ContactsAndMap/>
                </SectionWrapper>
            </Container>
        </Section>
    )
}

export default Contacts;