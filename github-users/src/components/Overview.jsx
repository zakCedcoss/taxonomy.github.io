import { useEffect, useState } from "react";
import { BsPeople } from "react-icons/bs";
import { FaBuilding, FaLink, FaTwitter } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useParams } from "react-router";

function Overview() {
  const { login } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/" + login)
      .then((resp) => resp.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="user">
      <div className="image-container user-img">
        <img src={user.avatar_url} alt="" />
      </div>
      <div className="details">
        <h3>{user.name}</h3>
        <h5
          style={{
            color: "gray",
            fontWeight: "lighter",
          }}
        >
          {user.login}
        </h5>
        <p>{user.bio}</p>
        <div className="stats">
          <BsPeople />
          <span>{user.followers} followers</span>.
          <span>{user.following} following</span>
        </div>
        <div className="user-stats">
          <div className="company">
            <FaBuilding />
            <span>
              {user.company?.length > 29
                ? user.company?.slice(0, 29) + "..."
                : user.company}
            </span>
          </div>
          <div className="location">
            <HiOutlineLocationMarker />
            <span>{user.location}</span>
          </div>
          <div className="link">
            <FaLink />
            <a href={user.blog}>{user.blog}</a>
          </div>
          <div className="twitter">
            <FaTwitter />
            <span>@{user.login}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
