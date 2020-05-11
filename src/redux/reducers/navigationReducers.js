import { CHANGE_INPUT, TOGGLE_UNIT } from "../actions/navigationActions";

const initilState = {
    input: "",
    unit: "C",
}



const reducer = (state = initilState, action) => {
    switch (action.type){
        case CHANGE_INPUT:
            const input = action.payload.input
            return {
                ...state,
                input,
            };
        case TOGGLE_UNIT:
            return{
                ...state,
                unit: state.unit === "C" ? "F" : "C"
            }
        default:
            return state;
    }
}

export default reducer;
