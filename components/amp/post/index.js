import RelativeTime from '../shared/RelativeTime'

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <div className="section mt3">
        <span className="byline__name section">{post.by.name}</span>
        <span className="byline__title">{post.by.title}</span>
      </div>
      <div>
        <RelativeTime timeStamp={post.timeStamp} />
      </div>
      <div>{post.body}</div>
    </div>
  )
}

export default Post
