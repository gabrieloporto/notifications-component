import circleNotification from "./assets/circle-svgrepo-com.svg";
import markAvatar from "./assets/avatar-mark-webber.webp";
import angelaAvatar from "./assets/avatar-angela-gray.webp";
import jacobAvatar from "./assets/avatar-jacob-thompson.webp";
import rizkyAvatar from "./assets/avatar-rizky-hasanuddin.webp";
import kimberlyAvatar from "./assets/avatar-kimberly-smith.webp";
import picture from "./assets/image-chess.webp";
import nathanAvatar from "./assets/avatar-nathan-peterson.webp";
import annaAvatar from "./assets/avatar-anna-kim.webp";
import { useState } from "react";

const firstActionMessage = " reacted to your recent post ",
  secondActionMessage = " followed you ",
  thirdActionMessage = " has joined your group ",
  fourActionMessage = " sent you a private message ",
  fiveActionMessage = " commented on your picture ",
  sixActionMessage = " reacted to your recent post ",
  sevenActionMessage = " left the group ";

const rizkyMessage =
  "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.";

function NotificationCount({ title, visitedNumber }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="count">
        <strong>{visitedNumber()}</strong>
      </div>
      {/* Call the function */}
    </div>
  );
}

function MarkAllAsRead({ link, onRead }) {
  return (
    <a className="mark-all-read" onClick={onRead}>
      {link}
    </a>
  );
}

function SingleNotification({
  srcImg,
  userName,
  action,
  postType,
  date,
  otherPosts,
  yourImg,
  cardClass,
}) {
  const notificationCardClass = !cardClass
      ? "notification-content is-active"
      : "notification-content",
    yourImgClass = yourImg ? "your-picture" : "your-picture hidden",
    yourMessageClass = otherPosts ? "other-posts" : "other-posts hidden";

  return (
    <>
      <section className={notificationCardClass}>
        <img className="avatar" src={srcImg} alt="Avatar" />
        <article className="text-content">
          <p>
            <strong className="username">{userName}</strong>
          </p>
          <p className="action">{action}</p>
          <p>
            <strong className="post-type">{postType}</strong>
          </p>
          <p className="date">
            <small>{date}</small>
          </p>
          <div className={yourMessageClass}>{otherPosts}</div>
        </article>
        <img className={yourImgClass} src={yourImg} alt="your picture" />
      </section>
    </>
  );
}

export default function NotificationComponent() {
  const visetedNotifications = () => {
    if (isVisited) {
      return 3;
    } else {
      return 0;
    }
  };

  const [isVisited, setIsVisited] = useState(true);
  const alertClassName = isVisited
    ? "new-notification"
    : "new-notification hidden";

  function handleClick() {
    setIsVisited(false);
  }

  return (
    <section className="notifications-container">
      <header className="header">
        <NotificationCount
          title="Notification"
          visitedNumber={visetedNotifications}
        />
        <MarkAllAsRead link="Mark all as read" onRead={handleClick} />
      </header>
      <article className="notifications-cards">
        <div className="card-container">
          <SingleNotification
            srcImg={markAvatar}
            userName="Mark Webber"
            action={firstActionMessage}
            postType="My first tournament today!"
            date="1m ago"
            cardClass={isVisited === false}
          />
          <img
            className={alertClassName}
            src={circleNotification}
            alt="new notification"
          />
        </div>
        <div className="card-container">
          <SingleNotification
            srcImg={angelaAvatar}
            userName="Angela Gray"
            action={secondActionMessage}
            date="5m ago"
            cardClass={isVisited === false}
          />
          <img
            className={alertClassName}
            src={circleNotification}
            alt="new notification"
          />
        </div>
        <div className="card-container">
          <SingleNotification
            srcImg={jacobAvatar}
            userName="Jacob Thompson"
            action={thirdActionMessage}
            postType="Chess Club"
            date="1 day ago"
            cardClass={isVisited === false}
          />
          <img
            className={alertClassName}
            src={circleNotification}
            alt="new notification"
          />
        </div>
        <SingleNotification
          srcImg={rizkyAvatar}
          userName="Rizky Hasannudin"
          action={fourActionMessage}
          otherPosts={rizkyMessage}
          date="5 days ago"
          cardClass={true}
        />
        <SingleNotification
          srcImg={kimberlyAvatar}
          userName="Kimberly Smith"
          action={fiveActionMessage}
          yourImg={picture}
          date="1 week ago"
          cardClass={true}
        />
        <SingleNotification
          srcImg={nathanAvatar}
          userName="Nathan Peterson"
          action={sixActionMessage}
          postType="5 end-game strategies to increase your win rate"
          date="2 weeks ago"
          cardClass={true}
        />
        <SingleNotification
          srcImg={annaAvatar}
          userName="Anna Kim"
          action={sevenActionMessage}
          postType="Chess Club"
          date="2 weeks ago"
          cardClass={true}
        />
      </article>
    </section>
  );
}
