import axios from "axios";
import config from "./../../common/config/config";

const initState = {
  count: 0,
  imgResult: [],
  isLoading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "search_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "search_FULFILLED":
      console.log(action);
      return {
        ...state,
        imgResult: action.payload.data.results,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const search = (textInput) => ({
  type: "search",
  payload: axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: config.accessKey,
      query: textInput
    }
  })
});
