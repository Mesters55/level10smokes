import React from "react";

import classes from "./TypeCheckbox.module.css";

const TypeCheckbox = (props) => {
  const setCheckedTypeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={classes.kastewrap}>
      <div className={classes.kaste}>
        <label className={classes.texts}>Smoke   </label>
        <input
          className={classes.checkboxs}
          type="checkbox"
          value="Smoke"
          name="Smoke"
          onChange={setCheckedTypeHandler}
        />
        <label className={classes.texts}>Flash   </label>
        <input
          className={classes.checkboxs}
          type="checkbox"
          value="Flash"
          onChange={setCheckedTypeHandler}
        />
        <label className={classes.texts}>Molotov   </label>
        <input
          className={classes.checkboxs}
          type="checkbox"
          value="Molotov"
          onChange={setCheckedTypeHandler}
        />
      </div>
    </div>
  );
};

export default TypeCheckbox;
