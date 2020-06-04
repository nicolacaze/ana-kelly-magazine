import React from "react"
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"
import logo from "../images/anakelly_logo.svg"


const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`

// const Mosaic = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
//   grid-auto-rows: 100px;
//   margin-left: 1rem;
//   grid-gap: 0.2rem;
// `

const Mosaic = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 100px;
  grid-template-areas:
    "first-tile first-tile first-tile second-tile"
    "first-tile first-tile first-tile second-tile"
    "first-tile first-tile first-tile second-tile"
    "third-tile third-tile fourth-tile fifth-tile"
    "third-tile third-tile fourth-tile fifth-tile"
    "third-tile third-tile fourth-tile fifth-tile"
    "third-tile third-tile fourth-tile fifth-tile"
    "third-tile third-tile sixth-tile sixth-tile"
    "seventh-tile seventh-tile sixth-tile sixth-tile"
    "seventh-tile seventh-tile sixth-tile sixth-tile"
    "seventh-tile seventh-tile sixth-tile sixth-tile";
  margin-left: 1rem;
  grid-gap: 0.2rem;
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

const getVerticalSpan = index => {
  switch(index) {
    case 0:
      return 5;
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 2;
    case 4:
      return 2;
    case 5:
      return 4;
    case 6:
      return 3;
  }
}

const getHorizontalSpan = index => {
  switch(index) {
    case 0:
      return 4;
    case 1:
      return 4;
    case 2:
      return 6;
    case 3:
      return 5;
    case 4:
      return 5;
    case 5:
      return 4;
    case 6:
      return 3;
  }
}

const getTileAreaPosition = index => {
  switch(index) {
    case 0:
      return 'first-tile';
    case 1:
      return 'second-tile';
    case 2:
      return 'third-tile';
    case 3:
      return 'fourth-tile';
    case 4:
      return 'fifth-tile';
    case 5:
      return 'sixth-tile';
    case 6:
      return 'seventh-tile';
  }
}

const MosaicTile = styled.div`
  overflow: hidden;
  display: grid;
  // grid-column: span ${({ itemNumber }) => getVerticalSpan(itemNumber)};
  // grid-row: span ${({ itemNumber }) => getHorizontalSpan(itemNumber)};
  grid-area: ${({ itemNumber }) => getTileAreaPosition(itemNumber)};
  img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const MenuContainer = styled.div`
  // margin-top: 5rem;
`

const Logo = styled.img`
  position: relative;
  top: 250px;
  left: -240px;
  transform: rotate(-90deg);
  width: 530px;
`

const generateRandomNumber = (limit) => Math.floor(Math.random() * limit + 1)

export default ({ data }) => {
  return (
    <HomeLayout>
      <SEO title="home" />
      <MenuContainer>
        <Logo src={logo} alt="Ana Kelly logo"/>
        <Menu>
          <ul className="menuItems">
            <li>Ana Kelly magazine</li>
            <li>Ana kelly boutique</li>
            <li>Ana Kelly family</li>
            <li>Ana Kelly</li>
          </ul>
        </Menu>
      </MenuContainer>
      <Mosaic>
        {console.log(data.pictures.edges)}
        {data.pictures.edges.slice(0,7)
        .map(({ node }, i) => 
          <MosaicTile key={node.id} itemNumber={i}>
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
