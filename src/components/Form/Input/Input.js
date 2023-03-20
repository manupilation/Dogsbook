import React from 'react';
import styles from "./Input.module.css";

const Input = ({label, type, value, onChange, error, onBlur}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={label} className={styles.label}>{label}</label>
      <input 
        id={label} 
        type={type} 
        className={styles.input}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
};

export default Input;
