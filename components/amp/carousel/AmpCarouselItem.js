import Link from 'next/link'

const AmpCarouselItem = ({ post }) => (
  <div className="land-see-hero-content mx-auto relative" key={post.id}>
    <amp-img
      className="cover land-see-hero-image land-see-cover-position-bottom"
      alt={post.title}
      width="1290"
      height="680"
      layout="responsive"
      src={post.image}
    />
    <div className="land-see-hero-typography mx-auto center z2 absolute">
      <Link href="/category/[id]" as={`${post.categoryUrl}`}>
        <a className=" xs-hide white text-decoration-none land-see-post-category land-see-page-navigation pt1 underline caps">
          {post.categoryName}
        </a>
      </Link>
      <h1 className="land-see-hero-title ampstart-title-md">
        <Link href="/post/[id]" as={`/post/${post.id}`}>
          <a className="text-decoration-none primary">{post.title}</a>
        </Link>
      </h1>
      <div
        className="land-see-hero-caption ampstart-caption mx-auto max-width-3 pt1 mb3"
        dangerouslySetInnerHTML={{ __html: post.shortDescription }}
      />
      <Link href="/post/[id]" as={`/post/${post.id}`}>
        <a className="white land-see-hero-button text-decoration-none relative">
          Читати
        </a>
      </Link>
    </div>
  </div>
)

AmpCarouselItem.defaultProps = {
  post: {
    id: '',
    postUrl: '',
    title: '',
    description: '',
    image: 'https://unsplash.it/500/400',
  },
}
export default AmpCarouselItem
