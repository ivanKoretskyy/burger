import React from 'react';
import classes from './Input.module.css';


const input = (props) => {
  let inputElement = null;
  let classesList = [classes.InputElement];
  if (props.inValid) {
    classesList.push(classes.Invalid)
  }
  const inputClasses = classesList.join(' ');
  
  console.log(props.elementType)
  switch (props.elementType) {
    case ('input'):
      inputElement = <input onChange={props.propsChange} className={inputClasses} {...props.elementConfig} value={props.value} />
      break;
    
    case ('textarea'):
      inputElement = <textarea onChange={props.propsChange} className={inputClasses} {...props.elementConfig} value={props.value} />
      break;
    case ('select'):
      inputElement = (
        <select
          className={inputClasses}
          value={props.value}
          onChange={props.propsChange}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}> {option.displayValue}</option>
          ))}
        </select>);
      break;
    default:
      inputElement = <input onChange={props.propsChange} className={inputClasses} {...props.elementConfig} value={props.value} />
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