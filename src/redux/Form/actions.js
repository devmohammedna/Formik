import  { FINISH_UPDATE, INITIAL_FORM }  from './constant'

// module.exports = {
  //  initialForm: (data) => (dispatch) => {
  //   dispatch({
  //     type: INITIAL_FORM,
  //     payload: data,
  //   });
  // },
//   finishUpdate: () => (dispatch) => {
//     dispatch({ type: FINISH_UPDATE });
//   },
// };

export const initialForm=(data) => (dispatch)=>{
    return (
    dispatch(  {
        type:INITIAL_FORM,
        payload:data
    }))
}
