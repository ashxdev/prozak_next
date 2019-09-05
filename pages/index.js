import withHomeLayout from "../components/layouts/HomeLayout"
import Link from "next/link"

export const config = { amp: true }

const PostLink = props => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

const Page = () => (
  <div>
    <PostLink id="hello-nextjs" />
    <PostLink id="learn-nextjs" />
    <PostLink id="deploy-nextjs" />
    <p>Hello Next.js</p>
    <amp-img
      class="grey-placeholder op"
      src="https://unsplash.it/500/400"
      width="500"
      height="300"
      layout="responsive"
    />
  </div>
)

export default withHomeLayout(Page)
