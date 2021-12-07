import { CREATE_NEW_DATA_FORM,
  DELETE_DATA_FORM,
  END_LOADING,
  ERROR,
  FETCH_ALL_DATA_FORMS,
  START_LOADING,
  UPDATE_DATA_FORM,
 } from "./constant";

export default function DataFormReduser( state = { isLoading: false, error: "", dataform: [] }, action) {
  switch (action.type) {
    case START_LOADING:
      return {
           ...state,
        isLoading: true,
      };
    case END_LOADING:
      return { ...state, isLoading: false };
      case ERROR:
      return { ...state, error: action.payload };
       case FETCH_ALL_DATA_FORMS:
      return {
        ...state,
        dataform: [action.payload, ...state.dataform],
        error: "",
      };
      case CREATE_NEW_DATA_FORM:
      return {
        ...state,
        dataform: [action.payload, ...state.dataform],
        error: "",
      };

    // case DELETE_DATA_FORM:
    //   return {
    //     ...state,
    //     dataform: state.dataform.filter(
    //       (item) => item._id !== action.payload
    //     ),
    //   };
    //    case UPDATE_DATA_FORM:
    //   return {
    //     ...state,
    //     dataform: state.dataform.map((experiance) =>
    //       experiance._id === action.payload._id ? action.payload : experiance
    //     ),
    //   };
    default:
      return state;
  }
}