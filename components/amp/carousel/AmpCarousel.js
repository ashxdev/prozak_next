import Head from "next/head"
import AmpCarouselItem from "./AmpCarouselItem"

const AmpCarousel = props => (
  <div className="land-see-hero-main mx-auto">
    <Head>
      <script
        async
        custom-element="amp-carousel"
        src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"
      />
    </Head>
    <amp-carousel
      className="land-see-hero-carousel mx-auto"
      media="(min-width: 40.06rem)"
      width="1290"
      height="680"
      layout="responsive"
      autoplay="4500"
      controls=""
      loop=""
      type="slides"
    >
      {props.data.map(post => (
        <AmpCarouselItem {...post} key={post.id} />
      ))}
    </amp-carousel>
  </div>
)

AmpCarousel.defaultProps = {
  data: [
    {
      id: "",
      postUrl: "",
      title: "",
      description: "",
      imgSrc: "https://unsplash.it/500/400",
    },
  ],
}
export default AmpCarousel
