import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import DOMPurify from 'dompurify'

const BlogPostLayout = styled.div`
  figure {
    display: flex;
    img {
      width: 80%;
      margin: 2rem auto;
    }

    blockquote {
      margin: 0;
    }
  }

  div {
    margin: 1rem 0;
    a {
      display: inline-block;
      text-decoration: none;
      color: #000;
      border: 2px solid #000;
      border-radius: 1rem;
      padding: 0.8rem 1rem;
      transition: all ease-out 0.2s;
      &:hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
`

const { sanitize } = DOMPurify;
DOMPurify.setConfig({
  FORBID_ATTR: ['style', 'class'],
  FORBID_TAGS: ['br']
});

DOMPurify.addHook('uponSanitizeElement', node => {
  if(node.nodeName === 'DIV') {
    console.log(node.classList);
    node.classList.add('blog-post__paragraph');
  }
  return node.innerHTML === '&nbsp;' ? node.remove() : node;
});

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node;

  return (
    <Layout>
      <BlogPostLayout>
        <SEO title="home" />
        <Menu />
        <div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: sanitize(post.content) }} />
        </div>
      </BlogPostLayout>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`
