import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./components/Details";
export default function App() {
  const baseURL = "https://api.tvmaze.com/search/shows?q=all";
  const [data, setData] = useState(null);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main data={data} setMovie={setMovie} />} />
          <Route path="/details" element={<Details movie={movie} />} />
        </Routes>
      </div>
    </Router>
  );
}
