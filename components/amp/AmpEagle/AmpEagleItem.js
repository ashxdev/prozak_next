import Link from 'next/link'
import RelativeTime from './RelativeTime'

const eagleItem = ({ item }) => {
  return (
    <div className="eagle-item">
      <div className="col-4 left pr1">
        <amp-img
          width={409}
          height={305}
          layout="responsive"
          src={`/static/img/land-see/${item.image}.jpg`}
          alt={item.title}
          className="cover"
        ></amp-img>
      </div>
      <div>
        <Link href="/">
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

        <p className="ampstart-caption pt1 pb3">{item.text}</p>

        <span>
          <i className="main-color material-icons land-see-hero-caption"></i>
          <RelativeTime timeStamp={item.timeStamp} />
        </span>
      </div>
    </div>
  )
}

export default eagleItem
