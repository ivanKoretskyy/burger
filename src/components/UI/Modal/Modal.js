import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => {
  const toasterClasses = !props.errorHandler ? " " : classes.ErrorHandler;
  return (
    <>
      {props.show ? (
        <>
          {!props.errorHandler ? (
            <Backdrop show={props.show} clicked={props.backdropClicked} />
          ) : null}
          <div
            className={classes.Modal + " " + toasterClasses}
            style={{
              tranform: props.show ? "translateY(0)" : "translateY(-100vh)",
              opacity: props.show ? "1" : "0"
            }}
          >
            <div>{props.children}</div>
            <div onClick={props.backdropClicked}>X</div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default modal;
