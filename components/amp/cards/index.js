import AmpCard from './AmpCard'

const Cards = ({ cards }) => {
  return (
    <ul className="list-reset m0 p0 center justify-center fit">
      {cards.map(card => (
        <li
          key={card.id}
          className="px1 mt1 block align-top land-see-post-item land-see-post-item-wide land-see-post-featured col land-see-recent"
        >
          <AmpCard card={card} />
        </li>
      ))}
    </ul>
  )
}

export default Cards
