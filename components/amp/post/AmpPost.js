import Head from 'next/head'
import RelativeTime from '../shared/RelativeTime'

const Post = ({ article }) => {
  return (
    <div className="p1 m1">
      <Head>
        <script
          async
          custom-element="amp-social-share"
          src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"
        ></script>
      </Head>
      <amp-img
        width={409}
        height={305}
        layout="responsive"
        src={article.image}
        alt={article.title}
        className="land-see-post-image cover"
      ></amp-img>
      <div className="social-share">
        <amp-social-share type="twitter" width="45" height="33" />
        <amp-social-share type="email" width="45" height="33" />
      </div>
      <h1>{article.title}</h1>
      <div className="py2">
        <RelativeTime timeStamp={article.publicationDate} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: article.description }} />
    </div>
  )
}

export default Post
