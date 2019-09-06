const AmpCarouselItem = ({ post }) => (
  <div className="land-see-hero-content mx-auto relative" key={post.id}>
    <amp-img
      className="cover land-see-hero-image land-see-cover-position-bottom"
      alt="Designer Kim Myeong"
      width="1290"
      height="680"
      layout="responsive"
      src={post.imgSrc}
    />
    <div className="land-see-hero-typography mx-auto center z2 absolute">
      <a
        className="land-see-post-category land-see-page-navigation underline caps max-width-1 sm-hide md-hide lg-hide"
        href="stories.amp.html?category&#x3D;fashion#land-see-fashion"
      >
        Fashion
      </a>
      <h1 className="land-see-hero-title ampstart-title-md">
        <a className="text-decoration-none" href={post.id}>
          {post.title}
        </a>
      </h1>
      <p className="land-see-hero-caption ampstart-caption mx-auto max-width-3 pt1 mb3">
        {post.description}
      </p>
      <a
        className="land-see-hero-button text-decoration-none relative"
        href="kim-myeong.amp.html"
      >
        Read More
      </a>
    </div>
  </div>
)

AmpCarouselItem.defaultProps = {
  post: {
    id: "",
    postUrl: "",
    title: "",
    description: "",
    imgSrc: "https://unsplash.it/500/400",
  },
}
export default AmpCarouselItem
