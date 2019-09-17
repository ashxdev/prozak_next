import Link from 'next/link'
import RelativeTime from '../shared/RelativeTime'

const eagleItem = ({ item }) => {
  return (
    <div className="eagle-item">
      <div className="col-4 left pr1">
        <amp-img
          width={409}
          height={305}
          layout="responsive"
          src={item.image}
          alt={item.title}
          className="cover"
        ></amp-img>
      </div>
      <div>
        <Link href="/post/[id]" as={`/post/${item.id}`}>
          <a>
            <h4 className="land-see-post-title ampstart-title-sm">
              {item.title}
            </h4>
          </a>
        </Link>

        <div className="clear">
          <a className="land-see-post-category land-see-page-navigation pt1 underline caps">
            {item.category}
          </a>
        </div>

        <p className="ampstart-caption pt1 pb3">{item.shortDescription}</p>

        <RelativeTime timeStamp={item.publicationDate} />
      </div>
    </div>
  )
}

export default eagleItem
