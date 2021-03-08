import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Smurf from "./Smurf";
import { getSmurfsData } from "../actions/index";

const SmurfList = () => {
  const dispatch = useDispatch();
  const { smurfs, loading } = useSelector((state) => state);
  //console.log(smurfs);

  useEffect(() => {
    getSmurfsData(dispatch);
  }, [getSmurfsData]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="listContainer">
      {smurfs.map((smurf) => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
