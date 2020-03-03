import React from "react"
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Slider from "../components/slider"


const Headline = ({ post }) => {

  const HeadImage = styled.div`
    background-image: url('${post.jetpack_featured_media_url}');
    background-size: cover;
    height: 350px;
  `

  return (
    <section>
      <h1>A la une</h1>
      <div>
        <Link to={post.slug}>
          <HeadImage></HeadImage>
        </Link>
        <p>{post.title}</p>
      </div>
    </section>
  )
}

const Section = styled.section`
  margin: 0 0 3rem;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  border-bottom: 1px solid #000;
  margin: 2rem 0;
  padding 0 0 1rem;
`
// const Slider = ({ posts }) => {

//   const Container = styled.ul`
//     display: grid;
//     grid-template-columns: repeat(${posts.edges.length}, auto);
//     grid-template-rows: auto;
//     margin: 0;
//     width: 100%;
//     overflow-x: scroll;
//     padding: 0;
//   `
  
//   const PostContainer = styled.li`
//     margin-left: 1rem;
//     list-style: none;
//     margin: 0 1rem 0 0;
//     a {
//       text-decoration: none;
//       color: #000;
//     }
//   `
  
//   const FeaturedImage = styled.img`
//     width: 400px;
//   `

//   return (
//     <Container>
//       {posts.edges.map(({ node }) => {
//         return (
//         <PostContainer key={node.id} >
//           <Link to={node.slug}>
//             <FeaturedImage src={node.jetpack_featured_media_url} alt="Post featured"/>
//             <h4>{node.title}</h4>
//           </Link>
//         </PostContainer>
//         )
//       })}
//     </Container>
//   )
// }

const HomeSection = ({ title, posts }) => (
  <Section>
    <SectionTitle>{title}</SectionTitle>
    {/* <Slider posts={posts} /> */}
  </Section>
)

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <Menu />
      <Slider slides={data.designers.edges} />
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
