import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Main(props) {
  function onClickButton(item) {
    props.setMovie(item);
  }
  function renderMovies() {
    if (props.data !== null) {
      return props.data.map((item, index) => {
        if (item.show.image !== null) {
          return (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-3 card box m-auto"
              style={{ width: "20rem" }}
            >
              <img
                className="card-img-top"
                src={item.show.image.original}
                alt={index}
              />
              <div className="card-body">
                <h5 className="card-title">{item.show.name} </h5>
                <p className="card-text">{item.show.type} </p>
                <p className="card-text">{item.show.language} </p>
                {/* <button
                  className="btn btn-primary"
                  onClick={() => onClickButton(item)}
                >
                  Details
                </button> */}
                <Link
                  to="/details"
                  className="btn btn-warning"
                  onClick={() => onClickButton(item)}
                >
                  About
                </Link>
              </div>
            </div>
          );
        }
      });
    }
  }
  return <div className="row">{renderMovies()}</div>;
}
export default Main;
