import "./NadesDetail.css";
import { Carousel } from "antd";

import HoverVideoPlayer from "react-hover-video-player";

const NadesDetail = (props) => {

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    width: '64rem',
    height: '36rem',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <section className="objectList">
      <div className="box-container">
        <div className="box">
          <table>
            <thead>
              <tr>
                <td>Type {props.type}</td>
                <td>{props.name}</td>
                <td>{props.map}</td>
              </tr>
            </thead>
          </table>
          <HoverVideoPlayer 
            className=''
            videoSrc={props.video}
            type='video/mp4'
            pausedOverlay={
              <img
                className=''
                src={props.picture}
                alt="asd"
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            }
          />
          <Carousel afterChange={onChange}>
            <div>
              <h3 style={contentStyle}><img className="coverphoto" src={props.picture} /></h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
          </Carousel>
          
          <h2 className="descDetail">Description</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
};
export default NadesDetail;
