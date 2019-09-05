import { useRouter } from "next/router"
import withPostLayout from "../../components/layouts/PostLayout"

const Page = () => {
  const router = useRouter()

  console.log(router.pathname)

  return (
    <div>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </div>
  )
}

export default withPostLayout(Page)
