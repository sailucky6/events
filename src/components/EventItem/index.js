import './index.css'

const EventItem = props => {
  const {eventDetails, activeEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const activeImageClassName = isActive ? `event-img active-event` : `event-img`

  const setActiveId = () => {
    activeEventId(id)
  }
  return (
    <li className="event-card">
      <button type="button" onClick={setActiveId} className="button">
        <img src={imageUrl} alt="event" className={activeImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
