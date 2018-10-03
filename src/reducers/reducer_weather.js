import { FETCH_WEATHER } from "../actions/index";
import _ from "lodash";

export default function(state = [], action) {
  //console.log("Action received (post middleware):", action);
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}
