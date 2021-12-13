import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            wpMenu(name: {eq: "HeaderMenu"}) {
                menuItems {
                    nodes {
                        label
                        url
                        id
                        parentId
                        path
                        childItems {
                            nodes {
                                url
                                label
                                id
                                title
                                path
                            }
                        }
                    }
                }
            }
        }
  `)
    return data
}

