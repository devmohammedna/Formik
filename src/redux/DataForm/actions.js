import {
  CREATE_NEW_DATA_FORM,
  DELETE_DATA_FORM,
  END_LOADING,
  ERROR,
  FETCH_ALL_DATA_FORMS,
  START_LOADING,
  UPDATE_DATA_FORM,
} from "./constant";

// import * as api from "./api";
import { FINISH_UPDATE } from "../Form/constant";

export const fetchAlldataform = (payload) => async (dispatch) => {
 
    dispatch({ type: START_LOADING });

   
    dispatch({ type: FETCH_ALL_DATA_FORMS, payload: payload });
 
  dispatch({ type: END_LOADING });
};

export const createNewdataform=(payload)=>{
    return ({
        type:CREATE_NEW_DATA_FORM,
        payload
    })
}

// export const deleteWorkExperiance = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });
//     await await api.deleteOne(id);

//     dispatch({ type: DELETE_WORK_EXPERIANCE, payload: id });
//   } catch (error) {
//     dispatch({ type: ERROR, payload: error.message });
//   }
//   dispatch({ type: END_LOADING });
// };
export const updatedataform  = (payload) => async (dispatch)=> {
   try {
    dispatch({ type: START_LOADING });
    // checkCurrentlyWork(body);
    
    dispatch({ type: UPDATE_DATA_FORM, payload: payload });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
  dispatch({ type: END_LOADING });
  dispatch({ type: FINISH_UPDATE });
 

};