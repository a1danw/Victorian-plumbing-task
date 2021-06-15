import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ICity } from "../../interfaces";
import { ListCard, TextRow, MoreInfo } from "./CitiesListStyles";
import { Store } from "../../context/store";
import { fetchCityDetailsAction } from "../../context/actions/citiesDetailAction";

const CitiesList = (props: any): JSX.Element => {
  const { cities } = props;

  const { state, dispatch } = useContext(Store);

  let history = useHistory();

  console.log(state.cityDetail);

  const fetchCities = async (city: any) => {
    await fetchCityDetailsAction(dispatch, city.city);
    // this is the best time to redirect
    history.push(`/cityDetail/${city.city}`);
  };

  return cities.slice(0, 20).map((city: ICity, index: any) => (
    <ListCard key={index} onClick={() => fetchCities(city)}>
      <TextRow>
        <h1>City:&nbsp;</h1>
        <h2>{city.city}</h2>
      </TextRow>
      <TextRow>
        <h1>Locations:&nbsp;</h1>
        <h2>{city.locations}</h2>
      </TextRow>
      <MoreInfo>Click to see air quality..</MoreInfo>
    </ListCard>
  ));
};

export default CitiesList;

{
  /* <Link to={`/cityDetail/${city.city}`} style={{ textDecoration: "none" }}></Link> */
}
