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
        <label className={classes.labelName}>Filter By Smoke</label>
        <select
          className={classes.checkboxs}
          value={props.selected}
          onChange={setCheckedTypeHandler}
        >
          <option value="">SELECT</option>
          <option value="Smoke">Smoke</option>
          <option value="Flash">Flash</option>
          <option value="Molotov">Molotov</option>
        </select>
      </div>
    </div>
  );
};

export default TypeCheckbox;
