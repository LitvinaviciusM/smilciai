import {useStaticQuery, graphql} from "gatsby";

export const useGalleryQuery = () => {
    const data = useStaticQuery(graphql`
        query GalleryQuery {
          wpPage(databaseId: {eq: 9}) {
            ACF_HomePage {
              gallerySectionOne {
                galleryName
                galleryDescriptionTitle
                galleryDescriptionList {
                  galleryDescriptionListItem
                }
                galleryImages {
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(blurredOptions: {width: 10}, placeholder: BLURRED)
                        fluid(maxHeight: 10, maxWidth: 10) {
                          base64
                          tracedSVG
                          srcWebp
                          srcSetWebp
                          originalImg
                          originalName
                        }
                      }
                    }
                  }
                }
              }
              gallerySectionTwo {
                galleryName
                galleryDescriptionTitle
                galleryDescriptionList {
                  galleryDescriptionListItem
                }
                galleryImages {
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(blurredOptions: {width: 10}, placeholder: BLURRED)
                        fluid(maxHeight: 10, maxWidth: 10) {
                          base64
                          tracedSVG
                          srcWebp
                          srcSetWebp
                          originalImg
                          originalName
                        }
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