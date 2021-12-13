import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {Form, InputField, SucceededMessage, TextAreaField, FormLabel, ContactLabelH6, FormInlineWrapper, FormInsideWrapper} from "./ContactForm.styles";
import {ButtonSubmit, PrimaryColor} from "../../components/Layout/Layout.styles";
import {ContactFormWrapper} from "../../components/Contacts/Contacts.styles";
import {useContactFormQuery} from "../../hooks/queries/useContactFormQuery"

const ContactForm = () => {

    const {wpPage: { ACF_HomePage: {contactForm: data} }} = useContactFormQuery();

    const [state, handleSubmit] = useForm(`${data.formspreeKey}`);

    if (state.succeeded) {
        return (
            <ContactFormWrapper>
                <h2>{data.contactFormHeading}</h2>
                <SucceededMessage>{data.successMessage}</SucceededMessage>
            </ContactFormWrapper>
        )
    }

    return (
        <ContactFormWrapper>
            <h2>{data.contactFormHeading}</h2>
            <Form onSubmit={handleSubmit}>

                <FormInsideWrapper>
                    <FormInlineWrapper>
                        <FormLabel>
                            <ContactLabelH6>{data.nameInput.contactFormLabel}<PrimaryColor>*</PrimaryColor></ContactLabelH6>
                            <ValidationError
                                prefix="Vardas"
                                field="name"
                                errors={state.errors}
                            />
                            <InputField
                                required
                                id="vardas"
                                type="name"
                                name="Vardas"
                                placeholder={data.nameInput.contactFormPlaceholder}
                            />
                        </FormLabel>


                        <FormLabel>
                            <ContactLabelH6>{data.emailInput.contactFormLabel}<PrimaryColor>*</PrimaryColor></ContactLabelH6>
                            <ValidationError
                                prefix="El. paštas"
                                field="email"
                                errors={state.errors}
                            />
                            <InputField
                                required
                                id="email"
                                type="email"
                                name="El. paštas"
                                placeholder={data.emailInput.contactFormPlaceholder}
                            />
                        </FormLabel>
                    </FormInlineWrapper>


                    <FormLabel>
                        <ContactLabelH6>{data.numberInput.contactFormLabel}<PrimaryColor>*</PrimaryColor></ContactLabelH6>
                        <ValidationError
                            prefix="Telefono numeris"
                            field="phone"
                            errors={state.errors}
                        />
                        <InputField
                            required
                            id="phone"
                            type="text"
                            name="Telefono numeris"
                            placeholder={data.numberInput.contactFormPlaceholder}
                        />
                    </FormLabel>

                    <FormInlineWrapper>
                        <FormLabel>
                            <ContactLabelH6>{data.arrivalInput.contactFormLabel}<PrimaryColor>*</PrimaryColor></ContactLabelH6>
                            <ValidationError
                                prefix="Data"
                                field="date"
                                errors={state.errors}
                            />
                            <InputField
                                required
                                id="arrivalDate"
                                type="date"
                                name="Atvykimo data"
                            />
                        </FormLabel>


                        <FormLabel>
                            <ContactLabelH6>{data.departureInput.contactFormLabel}<PrimaryColor>*</PrimaryColor></ContactLabelH6>
                            <ValidationError
                                prefix="Data"
                                field="date"
                                errors={state.errors}
                            />
                            <InputField
                                required
                                id="departureDate"
                                type="date"
                                name="Išvykimo data"
                            />
                        </FormLabel>
                    </FormInlineWrapper>

                    <FormLabel>
                        <ContactLabelH6>{data.letterInput.contactFormLabel}</ContactLabelH6>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <TextAreaField
                            id="message"
                            name="Papildomi klausimai"
                            placeholder={data.letterInput.contactFormPlaceholder}
                        />
                    </FormLabel>

                </FormInsideWrapper>

                <ButtonSubmit big="true" type="submit" disabled={state.submitting}>
                    {data.buttonText}
                </ButtonSubmit>
            </Form>
        </ContactFormWrapper>

    );
};

export default ContactForm;