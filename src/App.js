import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";
import WithoutSekelton from "./components/WithoutSekeleton";
import "./styles.css";
import WithSkeleton from "./components/WithSkeleton";

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    new Promise((res) => {
      setTimeout(() => res(), 3000);
    }).then(() => {
      axios.get("https://reqres.in/api/users").then((res) => {
        setData(res.data.data);
        setTimeout(() => setIsLoading(false), 2000);
      });
    });
  }, []);

  return (
    <div className="App">
      <ul className="contentWrapper">
        <WithSkeleton isLoading={isLoading} data={data} />
      </ul>
      <ul className="contentWrapper">
        <WithoutSekelton isLoading={isLoading} data={data} />
      </ul>
    </div>
  );
}
