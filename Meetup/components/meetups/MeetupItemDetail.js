import React from "react";
import classes from "./MeetupItemDetail.module.css";
const MeetupDetail = (props) => {
  return (
    <React.Fragment>
      <section className={classes.detail}>
        <img src={props.image}></img>
        <h1>{props.heading}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </React.Fragment>
  );
};

export default MeetupDetail;
