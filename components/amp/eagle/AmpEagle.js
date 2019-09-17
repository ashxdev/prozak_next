import EagleItem from './AmpEagleItem'

const Eagle = ({ items }) => {
  return (
    <section>
      <ul className="list-reset m0 p0 center justify-center fit">
        {items.map(item => (
          <li
            key={item.id}
            className="px1 mt1 block align-top land-see-post-item land-see-post-item-wide land-see-post-featured col land-see-recent"
          >
            <EagleItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Eagle
