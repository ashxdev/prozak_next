import Link from 'next/link'
const Header = () => (
  <div className="ampstart-headerbar primary-color fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4 z1">
    <Link href="/">
      <a className="text-decoration-none inline-block mr-auto ampstart-headerbar-home-link">
        <amp-img
          width={44}
          height={83}
          layout="fixed"
          src={`/static/images/prozak_logo_mobile.png`}
          alt="Prozak"
          className="cover"
        />
      </a>
    </Link>
    <button
      on="tap:sidebar.toggle"
      aria-label="open sidebar"
      className="ampstart-navbar-trigger md-hide lg-hide pr2 "
    >
      ☰
    </button>
  </div>
)

export default Header
