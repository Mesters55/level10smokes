import React from "react";
import NadesItem from "./NadesItem/NadesItem";

import classes from "./AvailableNades.module.css";

const AvailableNades = (props) => {
  // const [nades, setNades] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [httpError, setHttpError] = useState();

  // useEffect(() => {
  //   const fetchNades = async () => {
  //     const response = await fetch(
  //       "https://galadarbs-9e694-default-rtdb.firebaseio.com/nadesALL.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }

  //     const responseData = await response.json();

  //     const loadedNades = [];

  //     for (const key in responseData) {
  //       loadedNades.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         type: responseData[key].type,
  //         map: responseData[key].map,
  //         picture: responseData[key].picture,
  //         video: responseData[key].video,
  //       });
  //     }

  //     setNades(loadedNades);
  //     setIsLoading(false);
  //     console.log("iedodas pirmas datubazes vertibas no AvailableNades.js");
  //   };

  //   fetchNades().catch((error) => {
  //     setIsLoading(false);
  //     setHttpError(error.message);
  //   });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section className="CountryLoading">
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }

  // if (httpError) {
  //   return (
  //     <section className="CountryError">
  //       <p>{httpError}</p>
  //     </section>
  //   );
  // }
  // const nadesList = nades.map((nade) => (
  //   <NadesItem
  //     key={nade.id}
  //     id={nade.id}
  //     name={nade.name}
  //     description={nade.description}
  //     type={nade.type}
  //     map={nade.map}
  //     picture={nade.picture}
  //     video={nade.video}
  //     onCardChange={props.onCardChange}
  //   />
  // ));

  const test = props.items.map((nades) => (
    <NadesItem
    key={nades.id}
    id={nades.id}
    name={nades.name}
    description={nades.description}
    type={nades.type}
    map={nades.map}
    picture={nades.picture}
    video={nades.video}
    onCardChange={props.onCardChange}
  />
  ))

  return (
    <div className={classes.bgcolor}>
      <div className={classes.dropshadowBar}>
        <p className={classes.dzesttekstu}>dd</p>
      </div>
      <section className={classes.meals}>
        <ul>
          <div className={classes.testgrid}>
          {test}
          </div>
        </ul>
      </section>
    </div>
  );
};
export default AvailableNades;
