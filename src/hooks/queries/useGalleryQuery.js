import {useStaticQuery, graphql} from "gatsby";

export const useGalleryQuery = () => {
    const data = useStaticQuery(graphql`
        query GalleryQuery {
          wpPage(databaseId: {eq: 9}) {
            ACF_HomePage {
              gallerySection {
                galleryImages {
                  image {
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