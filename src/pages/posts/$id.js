import React from 'react'
import router from 'umi/router'

import styles from './index.css'

export default ({ match }) => (
  <div className={styles.normal}>
    <h1>
      Post
      {' '}
      {match.params.id}
    </h1>
    <button type="button" onClick={() => { router.goBack() }}>go back</button>
  </div>
  )
