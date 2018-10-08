import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ContentVideo from '../components/content-video'

class VideoIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulVideo.edges')
    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>
          Video
        </div>
        <div className="wrapper">
          <h2 className="section-headline">Recent Videos</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ContentVideo article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default VideoIndex

export const pageQuery = graphql`
  query VideoIndexQuery {
    allContentfulVideo(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          video
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
