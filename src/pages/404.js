import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import NotFound from "../components/NotFound/NotFound";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <NotFound/>
  </Layout>
)

export default NotFoundPage
