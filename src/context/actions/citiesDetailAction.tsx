import { Dispatch, ICityDetail } from "../../interfaces";

const BASE_URL = process.env.REACT_APP_URL_KEY;

export const fetchCityDetailsAction = async (
  dispatch: Dispatch,
  city: ICityDetail
) => {
  const URL = `${BASE_URL}/measurements?country=GB&city=${city}`;
  const data = await fetch(URL);

  const dataJSON = await data.json();
  console.log("RESPONSE", dataJSON);

  return dispatch({
    type: "GET_CITY_DETAIL",
    payload: dataJSON.results,
  });
};
