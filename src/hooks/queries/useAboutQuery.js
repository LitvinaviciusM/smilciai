import { useStaticQuery, graphql} from "gatsby";

export const useAboutQuery = () => {
    const data = useStaticQuery(graphql`
            query AboutQuery {
              wpPage(databaseId: {eq: 9}) {
                id
                ACF_HomePage {
                  aboutSection {
                    heading
                    textArea
                    button {
                      url
                      title
                      target
                    }
                    images {
                      imageOne {
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
                      imageTwo {
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
            }
    `);
    return data
};