import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
    const data = useStaticQuery(graphql`
            query HeroQuery {
              wpPage(databaseId: {eq: 9}) {
                id
                ACF_HomePage {
                  heroSection {
                    fieldGroupName
                    heading
                    subHeading
                    subHeadingTwo
                    button {
                      url
                      title
                    }
                    heroImage {
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
  `)
    return data
}