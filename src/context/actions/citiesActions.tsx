import { Dispatch } from "../../interfaces";
const BASE_URL = process.env.REACT_APP_URL_KEY;

export const fetchCitiesAction = async (dispatch: Dispatch) => {
  const URL = `${BASE_URL}/cities?country=GB`;
  const data = await fetch(URL);
  const dataJSON = await data.json();

  return dispatch({
    type: "FETCH_CITIES",
    payload: dataJSON.results,
  });
};
