import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL } from "../actions";

const initialState = {
    smurfInfo:[],
    isLoading:false,
    error:''
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfInfo: action.payload
            }
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.type.error
            }
        default:
            return state;
    }
};