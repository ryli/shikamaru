import React from 'react'
import PropTypes from 'prop-types'
import router from 'umi/router'

import { propsType } from 'reactType'

// TODO: 这里还报错
import styles from './id.css'

const Post = ({ match }: propsType) => (
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
