import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <div className={styles.VideoWrapper}>
      
      <iframe src={getEmbed(article.video)}></iframe>
    </div>
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)

export const getEmbed = (uri) => {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  var regexuri = uri.match(regExp)

  if (regexuri && regexuri[2].length == 11) {
    return 'https://www.youtube.com/embed/'+ regexuri[2]
  } else {
    return 'error'
  }
}