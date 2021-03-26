import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Intro from "../components/intro"
import Videos from "../components/videos"
import News from "../components/news"
import Sponsors from "../components/sponsors"
import About from "../components/about"
import Form from "../components/form"

export default function Home({ data }) {
  return (
    <Layout>
      <Banner />
      <Intro />
      <Videos />
      <News />
      <Sponsors />
      <About />
      <Form />
    </Layout>
  )
}
