import { useStaticQuery, graphql} from "gatsby";

export const useContactFormQuery = () => {
    const data = useStaticQuery(graphql`
            query ContactFormQuery {
               wpPage(databaseId: {eq: 9}) {
                    ACF_HomePage {
                      contactForm {
                        contactFormHeading
                        formspreeKey
                        buttonText
                        successMessage
                        arrivalInput {
                          contactFormLabel
                          contactFormPlaceholder
                        }
                        departureInput {
                          contactFormLabel
                          contactFormPlaceholder
                        }
                        emailInput {
                          contactFormLabel
                          contactFormPlaceholder
                        }
                        letterInput {
                          contactFormLabel
                          contactFormPlaceholder
                        }
                        nameInput {
                          contactFormLabel
                          contactFormPlaceholder
                        }
                        numberInput {
                          contactFormLabel
                          contactFormPlaceholder
                        }
                      }
                    }
                  }
            }
    `);
    return data
};