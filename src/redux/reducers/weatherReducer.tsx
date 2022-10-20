import Types from "../types";
//initial state of this reducer
const initialState = {
  cities: [],
};

//recieve state and edit the data based on the recieved action
const weatherReducer = (state = initialState, action: { type: string, payload: payloadProps }) => {
  switch (action.type) {
    //save cities action
    case Types.SAVE_CITIES:
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };

    //delete city action
    case Types.DELETE_CITY:
      return {
        ...state,
        cities: action.payload,
      };

    default:
      return state;
  }
};

export default weatherReducer;
