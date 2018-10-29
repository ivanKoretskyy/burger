import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => {
  return (
    <>
      {props.show ? (
        <>
          <Backdrop show={props.show} clicked={props.backdropClicked} />
          <div
            className={classes.Modal}
            style={{
              tranform: props.show ? "translateY(0)" : "translateY(-100vh)",
              opacity: props.show ? "1" : "0"
            }}
          >
            {props.children}
          </div>
        </>
      ) : null}
    </>
  );
};

export default modal;
