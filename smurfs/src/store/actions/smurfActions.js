import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START" // action creator
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"

export const fetchSmurfInfo = () => (dispatch) => {
    dispatch({ type:FETCH_SMURF_START })
    axios
    .get('http://localhost:3333/smurfs')
    .then((response => {
        dispatch({type:FETCH_SMURF_SUCCESS, payload: resposne.data})
    }))
    .catch((error) => console.log(error))
}

const thunk = (store) => (next) => (action) => {
    if (typeof action === "object") {
        next(action)
    } else if (typeof action === "function") {
        action(store.dispatch)
    }
};