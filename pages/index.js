import Link from 'next/link'
import AmpCarousel from '../components/amp/carousel/AmpCarousell'
import AmpCards from '../components/amp/cards/AmpCards'
import AmpEagle from '../components/amp/eagle/AmpEagle'
import Layout from '../components/layouts/Layout'

const PostLink = props => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

const Page = ({ data, cards, news }) => {
  return (
    <Layout>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
      <AmpCarousel data={data} />
      <AmpEagle items={cards} />
      <AmpCards cards={cards} />
    </Layout>
  )
}

Page.getInitialProps = async function(context) {
  const cards = [
    {
      id: '1',
      title: 'Use AMP to build great experiences across the web',
      image:
        'http://prozak.local/var/prozak/storage/images/media/images/google-amp22/394441-1-ukr-UA/Google-AMP2.jpg',
      category: 'Design',
      publicationDate: '1568709660000',
      shortDescription:
        'Whether you are a publisher, e-commerce company, storyteller, advertiser or email sender, AMP makes it easy to create great experiences on the web. Use AMP to build:',
    },
    {
      id: '2',
      title: 'Office Tour: Studio Serif more text here to wrap',
      image: '/static/img/land-see/studio-310px.jpg',
      category: 'Design',
      publicationDate: '1568797531490',
      shortDescription:
        'In the heart of the southeast, Studio Serif stands out among its competitors for its complex mixture of hand-drawn and computer-generated art coming together in beautifully, cohesive designs.',
    },
    {
      id: '3',
      title: 'Office Tour: Some another kind of news',
      image: '/static/img/land-see/studio-310px.jpg',
      category: 'Design',
      publicationDate: '1568709660000',
      shortDescription:
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

  const news = [
    {
      title: 'Use AMP to build great experiences across the web',
      image:
        'http://prozak.local/var/prozak/storage/images/media/images/google-amp22/394441-1-ukr-UA/Google-AMP2.jpg',
      url: 'http://prozak.local/content/view/full/55105',
      publicationDate: '1568709660',
      shortDescription:
        '<p>Whether you are a publisher, e-commerce company, storyteller, advertiser or email sender, AMP makes it easy to create great experiences on the web. Use AMP to build:</p>',
      description:
        '<a name="eztoc394432_1" id="eztoc394432_1"></a><h2>\nWhat is<br />AMP?</h2><a name="eztoc394432_1_0_0_0_1" id="eztoc394432_1_0_0_0_1"></a><h6>Web pages that are compelling, smooth, and load near instantaneously</h6><p>AMP is a simple and robust format to ensure your website is fast, user-first, and makes money. AMP provides long-term success for your web strategy with distribution across popular platforms and reduced operating and development costs.</p>\n<div class="">    <a href="/prozak_api/content/view/full/55106">Google-AMP2</a></div><p>asdasda sdetest test image</p>',
    },
  ]

  return { data, cards, news }
}

export const config = { amp: true }
export default Page
