import Link from 'next/link'

const categories = [
  { id: '1', title: 'Main news' },
  { id: '2', title: 'Hot news' },
  { id: '3', title: 'Breaking news' },
]

const Sidebar = () => {
  return (
    <amp-sidebar id="sidebar" className="sidebar" layout="nodisplay">
      <button on="tap:sidebar.toggle" className="sidebar-trigger">
        ✕
      </button>

      <ul className="list-style-none">
        {categories.map(cat => {
          return (
            <li key={cat.id}>
              <Link href="/post/[id]" as={`/post/${cat.id}`}>
                <a>{cat.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </amp-sidebar>
  )
}

export default Sidebar
