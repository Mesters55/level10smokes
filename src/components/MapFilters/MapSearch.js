import React from "react";

import classes from './MapSearch.module.css';
const MapSearch = (props) => {

    const mealSearchHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    }

    return (

          <div className={classes.bgcolorwrap}>
            <div className={classes.bgcolor}>
              <form onSubmit={e => { e.preventDefault(); }}>
                <input  className={classes.searchInput} type="text" placeholder="Search..." onChange = {mealSearchHandler} onKeyPress={(event) => {
                  if(event.key === "Enter"){
                    console.log('enter');
                  }
                }}></input>
              </form>
            </div>
          </div>
      );
}

export default MapSearch;
