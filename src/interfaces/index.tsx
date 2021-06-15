export type Dispatch = React.Dispatch<IAction>;

export interface IState {
  cities: [];
  cityDetail: [];
}

export interface IAction {
  type: string;
  payload: any;
}

export interface ICity {
  city: string;
  count: number;
  country: string;
  locations: number;
  name: string;
}

export interface ICityDetail {
  city: string;
  coordinates: { latitude: number; longitude: number };
  country: string;
  date: { utc: string; local: string };
  location: string;
  parameter: string;
  unit: string;
  value: number;
}
