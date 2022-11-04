import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GrLanguage, GrUpdate } from "react-icons/gr";
import { FaRegStar, FaBalanceScale } from "react-icons/fa";

function Repos() {
  const { login } = useParams();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/" + login + "/repos")
      .then((resp) => resp.json())
      .then((data) => setRepos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="repos">
      {repos.map((repo) => {
        return (
          <div className="repo" key={repo.id}>
            <div className="repo-name">
              <h3>{repo.name}</h3>
              <span>{repo.visibility}</span>
            </div>
            <p>{repo.description}</p>
            <div className="attribs">
              <span className="lang">
                <GrLanguage />
                <span>{repo.language}</span>
              </span>
              <span className="stars">
                <FaRegStar />
                <span>5487</span>
              </span>
              {repo.license && (
                <span className="license">
                  <FaBalanceScale />
                  <span>{repo.license.name}</span>
                </span>
              )}
              <span className="updated">
                <GrUpdate />
                <span>{new Date(repo.updated_at).toDateString()}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Repos;
