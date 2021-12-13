// import { useStaticQuery, graphql } from "gatsby"
//
// export const useFooterQuery = () => {
//     const data = useStaticQuery(graphql`
//         query FooterQuery {
//             wpMenu(name: {eq: "FooterMenu"}) {
//                 menuItems {
//                     nodes {
//                         label
//                         url
//                         id
//                         parentId
//                         path
//                         childItems {
//                             nodes {
//                                 url
//                                 path
//                                 label
//                                 id
//                                 title
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//   `)
//     return data
// }