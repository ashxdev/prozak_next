import Link from 'next/link'
import Meta from '../components/heads/Meta'
const Contact = () => (
  <div>
    <Meta />
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
      </ul>
    </nav>
    <p>Contact page</p>
  </div>
)

export default Contact
