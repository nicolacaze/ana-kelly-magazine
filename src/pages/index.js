import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"

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
        {data.categories.nodes.map((node) => {
          return (
            <div key={node.id}>
              <h2>{node.name}</h2>
              <Slider data={data[node.slug]}/>
            </div>
          )
        })}
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
    createurs: allWordpressPost(sort: {fields: [date]}, filter: {categories: {elemMatch: {slug: {eq: "createurs"}}}}) {
      edges {
        node {
          title
          excerpt
          slug
          date
        }
      }
    }
    rencontres: allWordpressPost(sort: {fields: [date]}, filter: {categories: {elemMatch: {slug: {eq: "rencontres"}}}}) {
      edges {
        node {
          title
          excerpt
          slug
          date
        }
      }
    }
    conseils: allWordpressPost(sort: {fields: [date]}, filter: {categories: {elemMatch: {slug: {eq: "conseils"}}}}) {
      edges {
        node {
          title
          excerpt
          slug
          date
        }
      }
    }
    categories: allWordpressCategory(filter: {slug: {in: ["createurs", "conseils", "rencontres"]}}) {
      nodes {
        name
        id
        slug
      }
    }
  }
`
