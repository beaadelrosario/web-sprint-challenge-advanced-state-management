import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START"; // action creator
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const fetchSmurfInfo = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((response) => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data });
    })
    .catch((error) => dispatch({ type: FETCH_SMURF_FAIL }));
};

export const postSmurf = (smurf) => (dispatch) => {
  dispatch({ type: POST_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((response) => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data });
    })
    .catch((error) => dispatch({ type: POST_SMURF_FAIL }));
};

const thunk = (store) => (next) => (action) => {
  if (typeof action === "object") {
    next(action);
  } else if (typeof action === "function") {
    action(store.dispatch);
  }
};
