import FriendsListItem from "../FriendsListItem/FriendsListItem";
import css from "./FriendsList.module.css";
export default function FriendsList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.ulStyle}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendsListItem usersList={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}
