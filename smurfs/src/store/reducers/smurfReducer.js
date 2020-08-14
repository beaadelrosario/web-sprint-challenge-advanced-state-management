import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS } from "../actions/smurfActions";

const initialState = {
    smurfInfo:[],
    isLoading:false,
    error:""
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfInfo: action.payload
            };
        default:
            return state;
    }
};