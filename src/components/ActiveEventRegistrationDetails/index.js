import './index.css'

const registrationStatus = {
  yetToRegistered: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegisterStatus} = props

  const renderNoActiveView = () => (
    <p className="no-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-register-description">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-description">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed-img"
      />
      <h1 className="registration-closed-heading">
        Registrations are Closed Now!
      </h1>
      <p className="registration-closed-description">
        Stay tuned. We will reopen <br />
        the registrations soon!
      </p>
    </div>
  )

  const renderActiveRegistrationStatus = () => {
    switch (activeEventRegisterStatus) {
      case registrationStatus.yetToRegistered:
        return renderYetToRegisteredView()
      case registrationStatus.registered:
        return renderRegistered()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosed()
      default:
        return renderNoActiveView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveRegistrationStatus()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
