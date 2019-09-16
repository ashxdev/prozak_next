import Header from '../headers/Header'
import Footer from '../footers/Footer'
import Sidebar from '../sidebar/sidebar'

const Layout = props => {
  return (
    <div className="site-wrapper">
      <Sidebar />
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
