import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/actions/actions";

const FetchTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.reducer.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return <div>FetchTasks</div>;
};

export default FetchTasks;
