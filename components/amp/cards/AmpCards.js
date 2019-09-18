import AmpCard from './AmpCard'

const Cards = ({ cards }) => {
  return (
    <section>
      <ul className="list-reset m0 p0 center justify-center fit">
        {cards.map(card => (
          <li
            key={card.id}
            className="px1 mt1 inline-flex align-top land-see-post-item land-see-post-item-wide"
          >
            <AmpCard card={card} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Cards
