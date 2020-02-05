import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContentBlock from "../components/homeContentBlock"

export default ({ data }) => {
  console.log(data);
  const { title, excerpt } = data.headline.edges[0].node;
  return (
    <Layout>
      <SEO title="home" />
      <h1>A la une</h1>
      <div className='main-outline'>
        <p>{title}</p>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
      <div className='main-content'>
        <HomeContentBlock title='Créateurs' data={data.designers} />
        <HomeContentBlock title='Rencontres' data={data.encounters} />
        <HomeContentBlock title='Conseils' data={data.advice} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    headline: allWordpressPost(sort: {order: DESC, fields: [date]}, limit: 1) {
      edges {
        node {
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
