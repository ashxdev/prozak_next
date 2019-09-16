import Link from 'next/link'
import AmpCarousel from '../components/amp/carousel'
import AmpCards from '../components/amp/cards'
import AmpEagle from '../components/amp/eagle'
import Layout from '../components/layouts/Layout'

const PostLink = props => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

const Page = ({ data, cards }) => {
  return (
    <Layout>
      <PostLink id="hello-nextjs" />
      <PostLink id="learn-nextjs" />
      <PostLink id="deploy-nextjs" />
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
      title: 'Office Tour: Studio Serif more text here to wrap',
      image: 'studio-310px',
      category: 'Design',
      timeStamp: 1568127930062,
      text:
        'In the heart of the southeast, Studio Serif stands out among its competitors for its complex mixture of hand-drawn and computer-generated art coming together in beautifully, cohesive designs.',
    },
    {
      id: '2',
      title: 'Office Tour: Studio Serif more text here to wrap',
      image: 'studio-310px',
      category: 'Design',
      timeStamp: 1568126906250,
      text:
        'In the heart of the southeast, Studio Serif stands out among its competitors for its complex mixture of hand-drawn and computer-generated art coming together in beautifully, cohesive designs.',
    },
    {
      id: '3',
      title: 'Office Tour: Studio Serif',
      image: 'studio-310px',
      category: 'Design',
      timeStamp: 1568126916250,
      text:
        'In the heart of the southeast, Studio Serif stands out among its competitors for its complex mixture of hand-drawn and computer-generated art coming together in beautifully, cohesive designs.',
    },
    {
      id: '4',
      title: 'Office Tour: Studio Serif',
      image: 'studio-310px',
      category: 'Design',
      timeStamp: 1568127106250,
      text:
        'In the heart of the southeast, Studio Serif stands out among its competitors for its complex mixture of hand-drawn and computer-generated art coming together in beautifully, cohesive designs.',
    },
    {
      id: '5',
      title: 'Office Tour: Studio Serif',
      image: 'studio-310px',
      category: 'Design',
      timeStamp: 1567116906250,
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

export const config = { amp: true }
export default Page
