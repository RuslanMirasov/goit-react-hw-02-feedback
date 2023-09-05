import css from './Statistics.module.css';
import React from "react";

export const Statistics = ({good , neutral, bad, total, positivePercentage}) => (
   <ul className={css.statistics}>
      <li><span>Good</span><span>{good}</span></li>
      <li><span>Neutral</span><span>{neutral}</span></li>
      <li><span>Bad</span><span>{bad}</span></li>
      <li><span>Total</span><span>{total}</span></li>
      <li><span>Positive Feetback</span><span>{positivePercentage}%</span></li>
   </ul>
);