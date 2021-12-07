import { CREATE_NEW_DATA_FORM,
  DELETE_DATA_FORM,
  END_LOADING,
  ERROR,
  FETCH_ALL_DATA_FORMS,
  START_LOADING,
  UPDATE_DATA_FORM,
 } from "./constant";

export default function DataFormReduser( initialState = { isLoading: false, error: "", dataform: [] }, action) {
  switch (action.type) {
    case START_LOADING:
      return {
           ...initialState,
        isLoading: true,
      };
    case END_LOADING:
      return { ...initialState, isLoading: false };
      case ERROR:
      return { ...initialState, error: action.payload };
       case FETCH_ALL_DATA_FORMS:
      return {
        ...initialState,
        dataform: [action.payload],
        error: "",
      };
      case CREATE_NEW_DATA_FORM:
      return {
        ...initialState,
        dataform: [action.payload, ...initialState.dataform],
        error: "",
      };

    // case DELETE_DATA_FORM:
    //   return {
    //     ...initialState,
    //     dataform: initialState.dataform.filter(
    //       (item) => item._id !== action.payload
    //     ),
    //   };
       case UPDATE_DATA_FORM:
      return {
        ...initialState,
        dataform: initialState.dataform.map((experiance) =>
          experiance._id === action.payload._id ? action.payload : experiance
        ),
      };
    default:
      return initialState;
  }
}