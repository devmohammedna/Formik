import { INITIAL_FORM, FINISH_UPDATE } from "./constant";

export default function FormReduser(state = { isUpdate: false }, action) {
  switch (action.type) {
    case INITIAL_FORM:
      return {
        ...state,
        formdata: action.payload,
        isUpdate: true,
      };
    case FINISH_UPDATE:
      return {
        ...state,
        formdata: state,
        isUpdate: false,
      };
    default:
      return state;
  }
}