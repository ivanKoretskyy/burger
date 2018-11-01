import React from 'react';
import classes from './Input.module.css';


const input = (props) => {
  let inputElement = null;
  console.log(props.elementType)
  switch (props.elementType) {
    case ('input'):
      inputElement = <input onChange={props.propsChange} className={classes.InputElement} {...props.elementConfig} value={props.value} />
      break;
    
    case ('textarea'):
      inputElement = <textarea onChange={props.propsChange} className={classes.InputElement} {...props.elementConfig} value={props.value} />
      break;
    case ('select'):
      inputElement = (
        <select
          className={classes.InputElement}
          value={props.value}
          onChange={props.propsChange}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}> {option.displayValue}</option>
          ))}
        </select>);
      break;
    default:
      inputElement = <input onChange={props.propsChange} className={classes.InputElement} {...props.elementConfig} value={props.value} />
      break;
  }


  return(
    <div className={classes.InputContainer}>
    <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );


}

export default input;