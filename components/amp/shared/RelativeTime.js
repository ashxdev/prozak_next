import formatToRealtiveTime from './helper/formatToRelativeTime'

const RelativeTime = ({ timeStamp }) => {
  return (
    <div className="flex">
      <i className="main-color material-icons land-see-hero-caption pr1">
        access_time
      </i>
      <p>{formatToRealtiveTime(timeStamp)}</p>
    </div>
  )
}

export default RelativeTime
