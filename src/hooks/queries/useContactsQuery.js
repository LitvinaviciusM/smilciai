import { useStaticQuery, graphql} from "gatsby";

export const useContactsQuery = () => {
    const data = useStaticQuery(graphql`
            query ContactsQuery {
               wpPage(databaseId: {eq: 9}) {
                   ACF_HomePage {
                      contacts {
                        contactsHeading
                        phoneNumber {
                          contactInfo
                          contactLabel
                        }
                        email {
                          contactInfo
                          contactLabel
                        }
                        address {
                          contactInfo
                          contactLabel
                        }
                        googleMap {
                          lat
                          lng
                        }
                      }
                    }
                  }
            }
    `);
    return data
};