import RelativeTime from '../shared/RelativeTime'

const Post = ({ post }) => {
  return (
    <div className="p1 m1">
      <h1>{post.title}</h1>
      <div className="section mt3">
        <span className="byline__name section">{post.by.name}</span>
        <br />
        <span className="byline__title">{post.by.title}</span>
      </div>
      <div className="pt2">
        <RelativeTime timeStamp={post.publicationDate} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.description }} />
    </div>
  )
}

export default Post
