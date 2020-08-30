let styles = require('./layout.module.css')
import * as React from 'react'

const Layout = ({ children }) => <div className={styles.container}>{children}</div>

export default Layout
