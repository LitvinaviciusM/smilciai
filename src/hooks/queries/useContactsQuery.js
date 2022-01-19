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
                    contactImage {
                      altText
                      localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: FULL_WIDTH
                                transformOptions: {fit: COVER, cropFocus: CENTER}
                                placeholder: BLURRED
                                blurredOptions: {width: 100}
                                aspectRatio: 1.5
                            )
                        }
                      }
                    }
                  }
                }
              }
            }
    `);
    return data
};