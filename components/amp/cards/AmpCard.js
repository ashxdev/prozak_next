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
      <p className="ampstart-caption pt1 pb3">{card.shortDescription}</p>
    </div>
  )
}

export default Card
