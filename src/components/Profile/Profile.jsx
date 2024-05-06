import css from "./Profile.module.css";
export default function Profile({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.avatar}>
        <img src={avatar} alt="User avatar" className={css.img} />
        <p>
          <b>{username}</b>
        </p>
        <p className={css.ProfileText}>@{tag}</p>
        <p className={css.ProfileText}>{location}</p>
      </div>

      <ul className={css.Ul}>
        <li className={css.LI}>
          <span>Followers</span>
          <span>
            <b>{followers}</b>
          </span>
        </li>
        <li className={css.LI}>
          <span>Views</span>
          <span>
            <b>{views}</b>
          </span>
        </li>
        <li className={css.LI}>
          <span>Likes</span>
          <span>
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}
