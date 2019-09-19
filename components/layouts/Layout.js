import Header from '../headers/Header'
import InfoHeader from '../headers/InfoHeader'
import Footer from '../footers/Footer'
import Sidebar from '../sidebar/sidebar'

const Layout = props => {
  return (
    <div className="site-wrapper">
      <Sidebar menu={props.menu} />
      <InfoHeader />
      <Header />
      <div className="body-container">{props.children}</div>
      <Footer />
      <style jsx>{`
        body-container {
          margin-top: 60px;
        }
      `}</style>
    </div>
  )
}

export default Layout
