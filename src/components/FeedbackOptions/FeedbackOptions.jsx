import css from './FeedbackOptions.module.css';
import React from "react";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
   <ul className={css.feedbackOptions}>
      {options.map((name) => (
         <li key={name}><button type="button" className={css.button} onClick={onLeaveFeedback}>{name}</button></li>
      ))}
   </ul>
);