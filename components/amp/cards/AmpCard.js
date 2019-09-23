import Link from 'next/link'

const Card = ({ card }) => {
  return (
    <div>
      <Link href="/">
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
      <Link href="/">
        <a className="land-see-post-category land-see-page-navigation inline-block pt1 underline caps">
          {card.category}
        </a>
      </Link>
      <Link href="/">
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
          <a>Back to homepage</a>
        </Link>
      </div>
    </div>
  )
}

export default Card
