import Link from 'next/link'

const categories = [
  { id: '1', title: 'Головні новини' },
  { id: '2', title: 'Гарячі новини' },
  { id: '3', title: 'Термінові новини' },
]

const Sidebar = () => {
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

      <amp-accordion>
        <section expanded="">
          <h2>Категорії</h2>
          <ul className="ampstart-dropdown-items list-reset m0 p0">
            {categories.map(cat => {
              return (
                <li key={cat.id} className="ampstart-dropdown-item">
                  <Link href="/post/[id]" as={`/post/${cat.id}`}>
                    <a className="text-decoration-none">{cat.title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
        <section>
          <h2>Категорії2</h2>
          <p>Лорем іпсум</p>
        </section>
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
