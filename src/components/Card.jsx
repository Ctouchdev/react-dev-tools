import React from "react";
import CircleAvatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <CircleAvatar img={props.img} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.tel} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
