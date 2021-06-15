import React, { useContext, useEffect } from "react";
import { Store } from "../context/store";
import { fetchCitiesAction } from "../context/actions/citiesActions";
import { ListWrapper } from "../components/CitiesList/CitiesListStyles";

import CitiesList from "../components/CitiesList";

const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  const { cities } = state;

  console.log(cities);

  useEffect(() => {
    state.cities.length === 0 && fetchCitiesAction(dispatch);
  });

  return (
    <ListWrapper>
      <CitiesList cities={cities} />
    </ListWrapper>
  );
};

export default HomePage;
