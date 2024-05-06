import css from "./FriendsListItem.module.css";
import clsx from "clsx";
export default function FriendsListItem({
  usersList: { avatar, name, isOnline },
}) {
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(css.text, isOnline ? css.Online : css.Offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
