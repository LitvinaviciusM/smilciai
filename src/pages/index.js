import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Contacts from "../components/Contacts/Contacts";
import Gallery from "../components/Gallery/Gallery"
import PageTransition from "../components/PageTransition/PageTransition";

const IndexPage = () => (
    <>
        <PageTransition/>
        <Layout>
        <Seo title="Pagrindinis" />
        <Hero/>
        <About/>
        <Contacts/>
        <Gallery/>
      </Layout>
    </>
)

export default IndexPage
