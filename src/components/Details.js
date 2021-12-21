import { Link } from "react-router-dom";
import "../styles.css";
export default function Details(props) {
  return (
    <div className="d-flex justify-content-left m-2">
      <div className="left">
        <div>
          <h1>{props.movie.show.name}</h1>
          {props.movie.show.summary}
          <div>Score : {props.movie.score}</div>
        </div>
        <Link to="/" className="btn btn-warning">
          HOME
        </Link>
      </div>
      <div className="right">
        <img className="right-image" src={props.movie.show.image.original} />
      </div>
    </div>
  );
}
