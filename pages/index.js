import Link from 'next/link'
import AmpCarousel from '../components/amp/carousel/AmpCarousel'
import AmpCards from '../components/amp/AmpCards/'
export const config = { amp: true }
import "@formatjs/intl-relativetimeformat/polyfill"

const PostLink = props => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

const Page = ({ data }) => {
  const rtf1 = new Intl.RelativeTimeFormat("en", { style: "narrow" })
  console.log(rtf1.format(3, "quarter"))

  return (
    <div>
      <PostLink id="hello-nextjs" />
      <PostLink id="learn-nextjs" />
      <PostLink id="deploy-nextjs" />
      <AmpCarousel data={data} />
      <AmpCards cards={cards} />
    </div>
  )
}


Page.getInitialProps = async function(context) {
  const cards = [
    {
      title: 'Office Tour: Studio Serif',
      image: 'studio-310px',
      category: 'Design',
      text:
        'In the heart of the southeast, Studio Serif stands out among its competitors for its complex mixture of hand-drawn and computer-generated art coming together in beautifully, cohesive designs.',
    },
    {
      title: 'Office Tour: Studio Serif',
      image: 'studio-310px',
      category: 'Design',
      text:
        'In the heart of the southeast, Studio Serif stands out among its competitors for its complex mixture of hand-drawn and computer-generated art coming together in beautifully, cohesive designs.',
    },
  ]
  const data = [
    {
      id: '1',
      postUrl: '',
      title: 'test title',
      description: 'test desc',
      imgSrc: 'https://unsplash.it/500/400',
    },
    {
      id: '2',
      postUrl: '',
      title: 'test title2',
      description: 'test desc3',
      imgSrc: 'https://unsplash.it/500/400',
    },
    {
      id: '3',
      postUrl: '',
      title: 'test titl3',
      description: 'test desc3',
      imgSrc: 'https://unsplash.it/500/400',
    },
  ]

  return { data, cards }
}

export default Page