import axios from "axios";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const addNewSmurf = (dispatch, input) => {
  dispatch({ type: "ADD_NEW_SMURF", payload: input });
};

export const setErrorMessage = (dispatch) => {
  dispatch({ type: "SET_ERROR_MESSAGE" });
};

export const getSmurfsData = (dispatch) => {
  dispatch({ type: "FETCHING_DATA_START" });

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "FETCHING_DATA_FAILURE", payload: err });
    });
};
