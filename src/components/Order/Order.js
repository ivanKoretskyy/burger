import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
  console.log(props)
  const ingridientObj = props.data.ingridients;
  const ingridients = Object.keys(ingridientObj).map(el => (<span key={el}><span>{el}:</span><span>{ingridientObj[el]}</span></span>))
  return (
    <div className={classes.Order}>
      <div>Ingridints: {ingridients}</div>
      <p>price: {props.data.price}</p>

    </div>
  );
}

export default order;