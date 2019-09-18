import EagleItem from './AmpEagleItem'

const Eagle = ({ items }) => {
  return (
    <section>
      <ul className="list-reset m0 p0 center justify-center fit">
        <li
          key={items[0].id}
          className="px1 mt1 block align-top land-see-post-item land-see-post-item-wide land-see-post-featured"
        >
          <EagleItem item={items[0]} />
        </li>
        <li
          key={items[1].id}
          className="px1 mt1 block align-top land-see-post-item land-see-post-item-wide land-see-post-featured"
        >
          <EagleItem item={items[1]} />
        </li>
        <li
          key={items[2].id}
          className="px1 mt1 block align-top land-see-post-item land-see-post-item-wide land-see-post-featured"
        >
          <EagleItem item={items[2]} />
        </li>
      </ul>
    </section>
  )
}

export default Eagle
