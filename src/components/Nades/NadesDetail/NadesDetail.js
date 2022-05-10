import "./NadesDetail.css";
import { Carousel } from "antd";
import React, {useState} from 'react';

const NadesDetail = (props) => {

  const [dotPosition, setDotPosition] = useState('top');

  function onChange(a, b, c) {
    setDotPosition('top');
    console.log(a, b, c);
  }

  return (
    <div className="border">
      <div className="topinfo">
        <div className="nadeType">
          <h4 className="mainName">Type</h4>
          <span className="spans">{props.type}</span>
        </div>
        <div className="name">
          <h4 className="mainName">Name</h4>
          <span className="spans"> {props.name}</span>
        </div>
        <div className="map">
          <h4 className="mainName">Map</h4>
          <span className="spans"> {props.map}</span>
        </div>
      </div>
      <div className="videobox">
        <div className="videoTab">
          <Carousel dotPosition={dotPosition} afterChange={onChange}>
            <div>
            <iframe
            title="iframeTitle"
            src={props.video}
            frameBorder="0"
            scrolling="no"
            width="100%"
            height="100%"
            allowFullScreen
            className="iframeVideo"
          ></iframe>
            </div>
            <div>
              <img className='renderPicture' src ={props.picture} alt ='Something went wrong!' height="100%" width="100%"></img>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="videoDesc">
        <h3 className="descTitle">Description</h3>

        <div className="nadeDesc">{props.description}</div>
      </div>
    </div>
  );
};
export default NadesDetail;
