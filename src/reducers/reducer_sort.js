import { SORT_WEATHER } from "../actions/index";
export default function(state = { sort: "cityName", order: "asc" }, action) {
  switch (action.type) {
    case SORT_WEATHER:
      console.log("sortWeather");
      const newState = {
        sort: action.payload.sort,
        order: action.payload.order
      };
      return newState;
  }
  return state;
}
