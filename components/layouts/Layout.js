import Header from '../headers/Header'
import Footer from '../footers/Footer'
import Sidebar from '../sidebar/sidebar'

import globalStyles from '../../static/style'
const Layout = props => {
  return (
    <div className="site-wrapper">
      <Sidebar />
      <Header />
      <div>{props.children}</div>
      <Footer />
      {/* <style amp-custom jsx global>
        {globalStyles}
      </style> */}
    </div>
  )
}

export default Layout
