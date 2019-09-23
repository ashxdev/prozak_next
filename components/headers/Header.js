import Link from 'next/link'

const Header = () => (
  <div className="ampstart-headerbar sticky flex primary-color justify-between items-center">
    <Link href="/">
      <a className="text-decoration-none">
        <h3 className="white header-text land-see-post-title">
          Prozak.info - Інформаційний антидепресант
        </h3>
      </a>
    </Link>
    <button
      on="tap:sidebar.toggle"
      aria-label="open sidebar"
      className="ampstart-navbar-trigger md-hide lg-hide pr2 "
    >
      ☰
    </button>
    <style jsx>{`
      .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
      }
    `}</style>
  </div>
)

export default Header
