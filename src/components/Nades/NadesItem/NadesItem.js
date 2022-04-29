import React from 'react';

import classes from "./NadesItem.module.css";
import HoverVideoPlayer from "react-hover-video-player";

const NadeItem = (props) => {

  return (
    <div className={classes["box"]} onClick={() => props.onCardChange(props.id)} >
      <div>
        <div className={classes["smokeNameBanner"]}>
          <h3 className={classes["smokeName"]}>{props.name}</h3>
          <span className={classes["granadeType"]}>{props.type}</span>
        </div>
        <div className={classes.material}>
          <div className={classes.videoLogo}>
          </div>
        <HoverVideoPlayer 
            className={classes["displayImage"]}
            videoSrc={props.video}
            type='video/mp4'
            pausedOverlay={
              <img
                className={classes["displayImage"]}
                src={props.picture}
                alt="asd"
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            }
          />
        </div>
        <div className={classes["descNameBanner"]}>
          <span className={classes["granadeType"]}>{props.description}</span>
        </div>
      </div>
    </div>
  );
};

export default NadeItem;
