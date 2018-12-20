import React from 'react'
import withRouter from 'umi/withRouter'

import Header from './Header'
import styles from './index.css'

function Layout({ children, location }) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default withRouter(Layout)
