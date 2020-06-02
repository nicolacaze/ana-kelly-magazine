import React from "react"
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"



const Mosaic = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-auto-rows: 100px;
  
`

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
`

const Menu = styled.nav`
  border: 2px solid #000;
  padding: 2rem;
  text-transform: uppercase;
  .menuItems {
    list-style: none;
    margin: 0;
  }
`

const MosaicTile = styled.div`
  overflow: hidden;
  display: grid;
  grid-column: span ${props => props.vertical};
  grid-row: span ${props => props.horizontal};
  img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const generateRandomNumber = (limit) => Math.floor(Math.random() * limit + 1)

export default ({ data }) => {
  console.log(data.pictures)
  return (
    <HomeLayout>
      <SEO title="home" />
      <div>
        <Menu>
          <ul className="menuItems">
            <li>Ana Kelly magazine</li>
            <li>Ana kelly boutique</li>
            <li>Ana Kelly family</li>
            <li>Ana Kelly</li>
          </ul>
        </Menu>
      </div>
      <Mosaic>
        {data.pictures.edges.slice(0,5).map(({ node }) => 
          <MosaicTile key={node.id} vertical={generateRandomNumber(4)} horizontal={generateRandomNumber(4)}>
            <img src={node.jetpack_featured_media_url} alt="pics"/>
          </MosaicTile>
        )}
      </Mosaic>
    </HomeLayout>
  )
}

export const pageQuery = graphql`
  query {
    headline: allWordpressPost(sort: {order: DESC, fields: [date]}, limit: 1) {
      edges {
        node {
          id
          jetpack_featured_media_url
          title
          excerpt
          slug
          date
        }
      }
    }
    pictures: allWordpressPost {
      edges {
        node {
          jetpack_featured_media_url
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
