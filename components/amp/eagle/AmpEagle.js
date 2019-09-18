import EagleItem from './AmpEagleItem'

const Eagle = ({ items }) => {
  return (
    <section className="section-list">
      <ul className="list-reset m0 p0 center justify-center fit">
        {items.map(item => (
          <li
            key={item.id}
            className="px1 mt1 inline-flex align-top land-see-post-item land-see-post-item-wide"
          >
            <EagleItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Eagle
