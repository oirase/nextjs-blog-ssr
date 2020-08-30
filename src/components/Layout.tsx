let styles = require('./layout.module.css')
import * as React from 'react'

const Layout:React.FC = ({ children }) => <div className={styles.container}>{children}</div>

export default Layout
