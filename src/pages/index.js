import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSection from "../components/homeSection"
import Headline from "../components/headline"
import Menu from "../components/menu"
import '../components/layout.css'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <Menu />
      <Headline post={data.headline.edges[0].node} />
      <HomeSection title='Créateurs' posts={data.designers} />
      <HomeSection title='Rencontres' posts={data.encounters} />
      <HomeSection title='Conseils' posts={data.advice} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    headline: allWordpressPost(sort: {order: DESC, fields: [date]}, limit: 1) {
      edges {
        node {
          jetpack_featured_media_url
          title
          excerpt
          slug
          date
        }
      }
    }
    designers: allWordpressPost(sort: {fields: [date]}, filter: {categories: {elemMatch: {slug: {eq: "createurs"}}}}) {
      edges {
        node {
          jetpack_featured_media_url
          title
          excerpt
          slug
          date
        }
      }
    }
    encounters: allWordpressPost(sort: {fields: [date]}, filter: {categories: {elemMatch: {slug: {eq: "rencontres"}}}}) {
      edges {
        node {
          jetpack_featured_media_url
          title
          excerpt
          slug
          date
        }
      }
    }
    advice: allWordpressPost(sort: {fields: [date]}, filter: {categories: {elemMatch: {slug: {eq: "conseils"}}}}) {
      edges {
        node {
          jetpack_featured_media_url
          title
          excerpt
          slug
          date
        }
      }
    }
  }
`
