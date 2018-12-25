import React from 'react'
import { connect } from 'dva'
import { Button } from 'antd'

const styles = require('./index.css')

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <Button>xx</Button>
      <ul className={styles.list}>
        <li>
          To get started, edit
          {' '}
          <code>src/index.js</code>
          {' '}
          and save to reload.
        </li>
        <li><a href="https://github.com/dvajs/dva">Getting Started</a></li>
      </ul>
    </div>
  )
}

IndexPage.propTypes = {
}

export default connect()(IndexPage)
