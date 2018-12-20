import React from 'react'
import PropTypes from 'prop-types'
import router from 'umi/router'

import styles from './index.css'

const Post = ({ match }) => (
  <div className={styles.normal}>
    <h1>
      Post
      {' '}
      {match.params.id}
    </h1>
    <button type="button" onClick={() => { router.goBack() }}>go back</button>
  </div>
)

Post.propTypes = {
  match: PropTypes.object,
}

export default Post
