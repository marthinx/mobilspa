import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
// import PerksModule from "../components/PerksModule/PerksModule"
// import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Willkommen auf MobilSPA"
          subTitle="die mobile SPA Lösung für heiße Momente!"
        />
        <BasicTextModule
          title="Wir wollen, dass es Ihnen gut geht"
          content="Unsere beliebtes Saunafass kann gemietet werden."
          linkText="View Products"
        />
        <Features
          title="Weiter Produkte von MobilSPA"
          introduction="Weiter interessante Produktvorstellungen."
        />
        <LatestPosts
          title="Neuigkeiten"
          introduction="Alle Neuigkeiten rund um die mobile Wellness"
        />
      </Layout>
    </>
  )
}

export default Index
