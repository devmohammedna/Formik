const { FINISH_UPDATE, INITIAL_FORM } = require("./constant");

module.exports = {
   initialForm: (data) => (dispatch) => {
    dispatch({
      type: INITIAL_FORM,
      payload: data,
    });
  },
  finishUpdate: () => (dispatch) => {
    dispatch({ type: FINISH_UPDATE });
  },
};