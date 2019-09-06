import Head from 'next/head'
import Link from 'next/link'

const Card = ({ card }) => {
  return (
    <div>
      <Head></Head>
      <Link href="/">
        <a className="text-decoration-none">
          <amp-img
            width={409}
            height={305}
            layout="responsive"
            src={`/static/images/land-see/${card.image}.jpg`}
            alt={card.title}
            className="land-see-post-image"
          ></amp-img>
        </a>
      </Link>
      <Link href="/"></Link>
    </div>
  )
}
