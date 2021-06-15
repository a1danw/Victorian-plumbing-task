import React, { useContext } from "react";
import { ICityDetail } from "../../interfaces";
import { Store } from "../../context/store";

const CityDetail = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  return state.cityDetail
    .slice(0, 20)
    .map((detail: ICityDetail, index: any) => (
      <>
        <div style={{ margin: "20px 0" }}>
          <p>Location: {detail.location}</p>
          <p>Date: {detail.date.utc.slice(0, 10)}</p>
          <p>Co-ordinates:</p>
          <p>Latitude - {detail.coordinates.latitude}</p>
          <p>Longtitude - {detail.coordinates.longitude}</p>
        </div>
      </>
    ));
};

export default CityDetail;
