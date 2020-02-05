import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContentBlock from "../components/homeContentBlock"
import Headline from "../components/headline"

export default ({ data }) => {
  console.log(data);
  const { title, jetpack_featured_media_url } = data.headline.edges[0].node;
  return (
    <Layout>
      <SEO title="home" />
      <Headline title={title} featuredImage={jetpack_featured_media_url} />
      <HomeContentBlock title='Créateurs' data={data.designers} />
      <HomeContentBlock title='Rencontres' data={data.encounters} />
      <HomeContentBlock title='Conseils' data={data.advice} />
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
