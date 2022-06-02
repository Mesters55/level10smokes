import React, { Fragment, useState, useEffect } from "react";

import AvailableNades from "./AvailableNades";
import NadesDetail from "./NadesDetail/NadesDetail";
import MapSearch from "../MapFilters/MapSearch";
import TypeCheckbox from "../MapFilters/TyoeCheckbox";
import NadesInfo from "./NadesInfo/NadesInfo";

import { Tabs } from "antd";
import "antd/dist/antd.css";

import mirageIcon from "../assets/mirageIcon.png";
import infernoIcon from "../assets/infernoIcon.png";
import dustIcon from "../assets/dustIcon.png";
import overpassIcon from "../assets/overpassIcon.png";
import nukeIcon from "../assets/nukeIcon.png";
import vertigoIcon from "../assets/vertigoIcon.png";
import ancietIcon from "../assets/ancietIcon.png";
import trainIcon from "../assets/trainIcon.png";
import classes from "./Nades.module.css";

const { TabPane } = Tabs;
const ikonaMirage = (
  <img className={classes.filtraIkona} src={mirageIcon} alt="Nav atrasts" />
);
const ikonaDust = (
  <img className={classes.filtraIkona} src={dustIcon} alt="Nav atrasts" />
);
const ikonaInferno = (
  <img className={classes.filtraIkona} src={infernoIcon} alt="Nav atrasts" />
);
const ikonaOverpass = (
  <img className={classes.filtraIkona} src={overpassIcon} alt="Nav atrasts" />
);
const ikonaNuke = (
  <img className={classes.filtraIkona} src={nukeIcon} alt="Nav atrasts" />
);
const ikonaVertigo = (
  <img className={classes.filtraIkona} src={vertigoIcon} alt="Nav atrasts" />
);
const ikonaAncient = (
  <img className={classes.filtraIkona} src={ancietIcon} alt="Nav atrasts" />
);
const ikonaTrain = (
  <img className={classes.filtraIkona} src={trainIcon} alt="Nav atrasts" />
);

const Nades = (props) => {
  const contentStyle = {
    size: "small",
    tabPosition: "left",
  };
  const [contentType, setContentType] = useState(false);
  const [loadedNadeId, setLoadedNadeId] = useState("");

  const [nade, setNade] = useState([]);
  const [detailNade, setDetailNade] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const [filteredSearch, setFilteredSearch] = useState("");

  const [showReturn, setShowReturn] = useState(false);

  //Checkbox usestate
  const [checkedNadeType, setCheckedNadeType] = useState("");
  useEffect(() => {
    const fetchObjects = async () => {
      const response = await fetch(
        "https://galadarbs-9e694-default-rtdb.firebaseio.com/nadesALL.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedDetailNade = [];

      for (const key in responseData) {
        loadedDetailNade.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          picture: responseData[key].picture,
          type: responseData[key].type,
          video: responseData[key].video,
          map: responseData[key].map,
        });
      }

      setDetailNade(loadedDetailNade);
      setNade(loadedDetailNade);
      setIsLoading(false);
      console.log("vertibas no Nades.js kas tiek iedotas NadesDetail.js");
      console.log(loadedDetailNade);
    };

    fetchObjects().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="ObjectsLoading">
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="ObjectsError">
        <p>{httpError}</p>
      </section>
    );
  }
  const selectedNade = detailNade.filter((nade) => {
    return nade.id === loadedNadeId;
  });

  const onCardChange = (cardId) => {
    setContentType(1);
    setLoadedNadeId(cardId);
    setShowReturn(true);
  };

  const onButtonClick = () => {
    setContentType(0);
    setShowReturn(false);
  };

  let selecedNadeAfterFilter = selectedNade.map((nade) => {
    return (
      <NadesDetail
        key={nade.id}
        id={nade.id}
        name={nade.name}
        description={nade.description}
        picture={nade.picture}
        type={nade.type}
        map={nade.map}
        video={nade.video}
        onCardChange={props.onCardChange}
      />
    );
  });

  const filteredSearchHandler = (selectedSearch) => {
    setFilteredSearch(selectedSearch);
    console.log(selectedSearch);
  };

  const setCheckedSmokeHandler = (selectedSmoke) => {
    setCheckedNadeType(selectedSmoke);
    console.log(selectedSmoke);
  };
  // Kartes "Mirage" filtrs
  const mirageFilter = nade.filter((nades) => {
    if (checkedNadeType === "") {
      return (
        nades.map === "Mirage" &&
        nades.name.toLowerCase().includes(filteredSearch)
      );
    } else {
      return (
        nades.map === "Mirage" &&
        nades.name.toLowerCase().includes(filteredSearch) &&
        nades.type.includes(checkedNadeType)
      );
    }
  });

  let mirage = (
    <AvailableNades
      items={mirageFilter}
      onCardChange={onCardChange}
      onButtonClick={onButtonClick}
    />
  );
  if (contentType === 1) {
    mirage = selecedNadeAfterFilter;
  } else {
    mirage = (
      <AvailableNades items={mirageFilter} onCardChange={onCardChange} />
    );
  }
  //Kartes "Inferno" filtrs
  const infernoFilter = nade.filter((nades) => {
    if (checkedNadeType === "") {
      return (
        nades.map === "Inferno" &&
        nades.name.includes(filteredSearch)
      );
    } else {
      return (
        nades.map === "Inferno" &&
        nades.name.includes(filteredSearch) &&
        nades.type.includes(checkedNadeType)
      );
    }
  });

  let inferno = (
    <AvailableNades
      items={infernoFilter}
      onCardChange={onCardChange}
      onButtonClick={onButtonClick}
    />
  );
  if (contentType === 1) {
    inferno = selecedNadeAfterFilter;
  } else {
    inferno = (
      <AvailableNades items={infernoFilter} onCardChange={onCardChange} />
    );
  }
  // Kartes "Dust" filtrs
  const dustFilter = nade.filter((nades) => {
    if (checkedNadeType === "") {
      return (
        nades.map === "Dust" &&
        nades.name.includes(filteredSearch)
      );
    } else {
      return (
        nades.map === "Dust" &&
        nades.name.includes(filteredSearch) &&
        nades.type.includes(checkedNadeType)
      );
    }
  });

  let dust = (
    <AvailableNades
      items={dustFilter}
      onCardChange={onCardChange}
      onButtonClick={onButtonClick}
    />
  );
  if (contentType === 1) {
    dust = selecedNadeAfterFilter;
  } else {
    dust = <AvailableNades items={dustFilter} onCardChange={onCardChange} />;
  }
  // Kartes "OverPass" filtrs
  const overpassFilter = nade.filter((nades) => {
    if (checkedNadeType === "") {
      return (
        nades.map === "Overpass" &&
        nades.name.includes(filteredSearch)
      );
    } else {
      return (
        nades.map === "Overpass" &&
        nades.name.includes(filteredSearch)
      );
    }
  });

  let overpass = (
    <AvailableNades
      items={overpassFilter}
      onCardChange={onCardChange}
      onButtonClick={onButtonClick}
    />
  );
  if (contentType === 1) {
    overpass = selecedNadeAfterFilter;
  } else {
    overpass = (
      <AvailableNades items={overpassFilter} onCardChange={onCardChange} />
    );
  }
  // Kartes "Nuke" filtrs
  const nukeFilter = nade.filter((nades) => {
    if (checkedNadeType === "") {
      return (
        nades.map === "Nuke" &&
        nades.name.includes(filteredSearch)
      );
    } else {
      return (
        nades.map === "Nuke" &&
        nades.name.includes(filteredSearch) &&
        nades.type.includes(checkedNadeType)
      );
    }
  });

  let nuke = (
    <AvailableNades
      items={nukeFilter}
      onCardChange={onCardChange}
      onButtonClick={onButtonClick}
    />
  );
  if (contentType === 1) {
    nuke = selecedNadeAfterFilter;
  } else {
    nuke = <AvailableNades items={nukeFilter} onCardChange={onCardChange} />;
  }
  // Kartes "Vertigo" filtrs
  const vertigoFilter = nade.filter((nades) => {
    if (checkedNadeType === "") {
      return (
        nades.map === "Vertigo" &&
        nades.name.includes(filteredSearch)
      );
    } else {
      return (
        nades.map === "Vertigo" &&
        nades.name.includes(filteredSearch) &&
        nades.type.includes(checkedNadeType)
      );
    }
  });

  let vertigo = (
    <AvailableNades
      items={vertigoFilter}
      onCardChange={onCardChange}
      onButtonClick={onButtonClick}
    />
  );
  if (contentType === 1) {
    vertigo = selecedNadeAfterFilter;
  } else {
    vertigo = (
      <AvailableNades items={vertigoFilter} onCardChange={onCardChange} />
    );
  }
  // Kartes "Ancient" filtrs
  const ancientFilter = nade.filter((nades) => {
    if (checkedNadeType === "") {
      return (
        nades.map === "Ancient" &&
        nades.name.includes(filteredSearch)
      );
    } else {
      return (
        nades.map === "Ancient" &&
        nades.name.includes(filteredSearch) &&
        nades.type.includes(checkedNadeType)
      );
    }
  });

  let ancient = (
    <AvailableNades
      items={ancientFilter}
      onCardChange={onCardChange}
      onButtonClick={onButtonClick}
    />
  );
  if (contentType === 1) {
    ancient = selecedNadeAfterFilter;
  } else {
    ancient = (
      <AvailableNades items={ancientFilter} onCardChange={onCardChange} />
    );
  }

  // Kartes "Train" filtrs
  const trainFilter = nade.filter((nades) => {
    if (checkedNadeType === "") {
      return (
        nades.map === "Train" &&
        nades.name.includes(filteredSearch)
      );
    } else {
      return (
        nades.map === "Train" &&
        nades.name.includes(filteredSearch) &&
        nades.type.includes(checkedNadeType)
      );
    }
  });

  let train = (
    <AvailableNades
      items={trainFilter}
      onCardChange={onCardChange}
      onButtonClick={onButtonClick}
    />
  );
  if (contentType === 1) {
    train = selecedNadeAfterFilter;
  } else {
    train = (
      <AvailableNades items={trainFilter} onCardChange={onCardChange} />
    );
  }

  return (
    <Fragment>
      <Tabs
        tabPosition="left"
        className={classes.tabs}
        defaultActiveKey="1"
        type="card"
        value={contentStyle}
        width="100%"
      >
        <TabPane tab={ikonaMirage} key="1">
          {showReturn ? (
            <div className={classes.buttonlocation}>
              {" "}
              <button className={classes.button6} onClick={onButtonClick}>
                Back
              </button>
            </div>
          ) : (
            <div>
              <NadesInfo />
              <MapSearch onChangeFilter={filteredSearchHandler} />
              <TypeCheckbox onChangeFilter={setCheckedSmokeHandler} />
              <button className={classes.hidebutton} onClick={onButtonClick}>
                Back
              </button>
            </div>
          )}
          {mirage}
        </TabPane>
        <TabPane tab={ikonaInferno} key="2">
          {showReturn ? (
            <div className={classes.buttonlocation}>
              {" "}
              <button className={classes.button6} onClick={onButtonClick}>
                Back
              </button>
            </div>
          ) : (
            <div>
              <MapSearch onChangeFilter={filteredSearchHandler} />
              <TypeCheckbox onChangeFilter={setCheckedSmokeHandler} />
              <button className={classes.hidebutton} onClick={onButtonClick}>
                Back
              </button>
            </div>
          )}
          {inferno}
        </TabPane>
        <TabPane tab={ikonaDust} key="3">
          {showReturn ? (
            <div className={classes.buttonlocation}>
              {" "}
              <button className={classes.button6} onClick={onButtonClick}>
                Back
              </button>
            </div>
          ) : (
            <div>
              <MapSearch onChangeFilter={filteredSearchHandler} />
              <TypeCheckbox onChangeFilter={setCheckedSmokeHandler} />
              <button className={classes.hidebutton} onClick={onButtonClick}>
                Back
              </button>
            </div>
          )}
          {dust}
        </TabPane>
        <TabPane tab={ikonaOverpass} key="4">
          {showReturn ? (
            <div className={classes.buttonlocation}>
              {" "}
              <button className={classes.button6} onClick={onButtonClick}>
                Back
              </button>
            </div>
          ) : (
            <div>
              <MapSearch onChangeFilter={filteredSearchHandler} />
              <TypeCheckbox onChangeFilter={setCheckedSmokeHandler} />
              <button className={classes.hidebutton} onClick={onButtonClick}>
                Back
              </button>
            </div>
          )}
          {overpass}
        </TabPane>
        <TabPane tab={ikonaNuke} key="5">
          {showReturn ? (
            <div className={classes.buttonlocation}>
              {" "}
              <button className={classes.button6} onClick={onButtonClick}>
                Back
              </button>
            </div>
          ) : (
            <div>
              <MapSearch onChangeFilter={filteredSearchHandler} />
              <TypeCheckbox onChangeFilter={setCheckedSmokeHandler} />
              <button className={classes.hidebutton} onClick={onButtonClick}>
                Back
              </button>
            </div>
          )}
          {nuke}
        </TabPane>
        <TabPane tab={ikonaVertigo} key="6">
          {showReturn ? (
            <div className={classes.buttonlocation}>
              {" "}
              <button className={classes.button6} onClick={onButtonClick}>
                Back
              </button>
            </div>
          ) : (
            <div>
              <MapSearch onChangeFilter={filteredSearchHandler} />
              <TypeCheckbox onChangeFilter={setCheckedSmokeHandler} />
              <button className={classes.hidebutton} onClick={onButtonClick}>
                Back
              </button>
            </div>
          )}
          {vertigo}
        </TabPane>
        <TabPane tab={ikonaAncient} key="7">
          {showReturn ? (
            <div className={classes.buttonlocation}>
              {" "}
              <button className={classes.button6} onClick={onButtonClick}>
                Back
              </button>
            </div>
          ) : (
            <div>
              <MapSearch onChangeFilter={filteredSearchHandler} />
              <TypeCheckbox onChangeFilter={setCheckedSmokeHandler} />
              <button className={classes.hidebutton} onClick={onButtonClick}>
                Back
              </button>
            </div>
          )}
          {ancient}
        </TabPane>
        <TabPane tab={ikonaTrain} key="8">
        {showReturn ? (
            <div className={classes.buttonlocation}>
              {" "}
              <button className={classes.button6} onClick={onButtonClick}>
                Back
              </button>
            </div>
          ) : (
            <div>
              <MapSearch onChangeFilter={filteredSearchHandler} />
              <TypeCheckbox onChangeFilter={setCheckedSmokeHandler} />
              <button className={classes.hidebutton} onClick={onButtonClick}>
                Back
              </button>
            </div>
          )}
          {train}
        </TabPane>
      </Tabs>
    </Fragment>
  );
};

export default Nades;
