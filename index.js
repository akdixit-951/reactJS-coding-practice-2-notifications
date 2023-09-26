const Notification = (props) => {
  const {
    notificationType,
    imgSrc,
    icon,
    notificationText,
    textClassName,
  } = props;
  return (
    <div className={`notification ${notificationType}`}>
      <img className={`${icon}`} src={`${imgSrc}`} />
      <p className={`${textClassName}`}>{notificationText}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      notificationType="information"
      imgSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      icon="icon"
      notificationText="Information Message"
      textClassName="notification-text"
    />
    <Notification
      notificationType="success"
      imgSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      icon="icon"
      notificationText="Success Message"
      textClassName="notification-text"
    />
    <Notification
      notificationType="warning"
      imgSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      icon="icon"
      notificationText="Warning Message"
      textClassName="notification-text"
    />
    <Notification
      notificationType="error"
      imgSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      icon="icon"
      notificationText="Error Message"
      textClassName="notification-text"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
