import Link from 'next/link'

const Sidebar = ({ menu }) => {
  return (
    <amp-sidebar
      id="sidebar"
      className="sidebar px3 md-hide lg-hide"
      layout="nodisplay"
    >
      <button on="tap:sidebar.toggle" className="sidebar-trigger">
        ✕
      </button>

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

      <amp-accordion expand-single-section="">
        {menu.map((category, index) => {
          return (
            <section key={category.id} expanded={!index ? '' : undefined}>
              <h2>{category.title}</h2>
              <div>
                {category.subMenu.map(subMenu => {
                  return (
                    <p key={subMenu.id} className="ampstart-dropdown-item">
                      <Link
                        href="/category/[id]"
                        as={`/category/${subMenu.id}`}
                      >
                        <a className="text-decoration-none">{subMenu.title}</a>
                      </Link>
                    </p>
                  )
                })}
              </div>
            </section>
          )
        })}
      </amp-accordion>

      <h2>Про нас</h2>

      <h2>Контакти</h2>
      <style jsx>{`
        a,
        a:active,
        a:visited {
          color: rgb(2, 20, 37);
        }
      `}</style>
    </amp-sidebar>
  )
}

export default Sidebar
