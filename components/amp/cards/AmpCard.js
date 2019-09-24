import Link from 'next/link'
import RelativeTime from '../shared/RelativeTime'

const Card = ({ card }) => {
  return (
    <div>
      <Link href="/post/[id]" as={`/post/${card.id}`}>
        <a className="text-decoration-none">
          <amp-img
            width={409}
            height={305}
            layout="responsive"
            src={card.image}
            alt={card.title}
            className="land-see-post-image cover"
          ></amp-img>
        </a>
      </Link>

      <Link href="/category/[id]" as={`${card.categoryUrl}`}>
        <a className="land-see-post-category land-see-page-navigation inline-block pt1 underline caps">
          {card.categoryName}
        </a>
      </Link>
      <Link href="/post/[id]" as={`/post/${card.id}`}>
        <h4 className="land-see-post-title ampstart-title-sm pt1">
          <a className="text-decoration-none">{card.title}</a>
        </h4>
      </Link>
      <div
        className="ampstart-caption pt1 pb3"
        dangerouslySetInnerHTML={{ __html: card.shortDescription }}
      />
      <div className="go-back">
        <Link href="/">
          <a>На головну</a>
        </Link>
      </div>
      <RelativeTime timeStamp={card.publicationDate} />
    </div>
  )
}

export default Card
