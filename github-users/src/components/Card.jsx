import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ user }) {
  const details = {
    name: "Devil",
    avatar_url:
      "https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg",
    followers: "1 M",
    login: "devilboy",
    following: 1,
    public_repos: 15,
  };
  const [reqUser, setReqUser] = useState(details);

  useEffect(() => {
    if (user) {
      fetch("https://api.github.com/users/" + user.login)
        .then((resp) => resp.json())
        .then((data) => setReqUser(data))
        .catch((err) => console.log(err));
    } else {
      setReqUser(details);
    }
  }, [user]);

  return (
    <div className="card">
      <div className="image-container">
        <img src={reqUser.avatar_url} alt="" />
      </div>
      <div className="details-container">
        <div className="action">
          <h5>{reqUser.name}</h5>
          <Link to={`/${reqUser.login}`}>
            <button>View Profile</button>
          </Link>
        </div>
        <p>@{reqUser.login}</p>
        <div className="count">
          <p>{reqUser.followers} followers</p>
          <p>{reqUser.following} following</p>
          <p>{reqUser.public_repos} repos</p>
        </div>
        <div className="skills">
          <p>React Js</p>
          <p>Javascript</p>
          <p>Python</p>
          <p>Node Js</p>
          <p>Mongo Db</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
