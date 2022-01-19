import React from 'react';
import {ContactInfo, ContactItems, ContactsWrapper} from "../../components/Contacts/Contacts.styles";
import Map from "../../components/Map/Map";

const ContactsAndMap = ({data}) => {

    return (
        <ContactsWrapper>
            <ContactItems>
                <h2>{data.contactsHeading}</h2>
                <ContactInfo>
                    <ul>
                        <li>{data.phoneNumber.contactLabel}</li>
                        <a href={`tel:${data.phoneNumber.contactInfo}`}>{data.phoneNumber.contactInfo}</a>
                    </ul>
                    <ul>
                        <li>{data.email.contactLabel}</li>
                        <a href={`mailto:${data.email.contactInfo}`}>{data.email.contactInfo}</a>
                    </ul>
                    <ul>
                        <li>{data.address.contactLabel}</li>
                        <li>{data.address.contactInfo}</li>
                    </ul>
                </ContactInfo>
                    <Map coords={data.googleMap}/>
            </ContactItems>
        </ContactsWrapper>
    );
};

export default ContactsAndMap;