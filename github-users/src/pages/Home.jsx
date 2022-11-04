import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      fetch("https://api.github.com/users")
        .then((resp) => resp.json())
        .then((data) => {
          if (search) {
            let user = data.filter((item) => {
              return !item.login.indexOf(search);
            });
            setUsers(user);
          } else {
            setUsers([]);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [search]);

  return (
    <div className="home">
      <h1>Get Github Profile Cards</h1>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by username"
      />
      <Card user={users[0]} />
      <Footer login={users[0]?.login} />
    </div>
  );
}

export default Home;
