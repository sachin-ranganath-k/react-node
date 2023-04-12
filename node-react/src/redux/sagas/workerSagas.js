//put() is equivalent to dispatch. Instead of using redux dispatch() use put()

import axios from "axios";
import { put } from "redux-saga/effects";
import {
  FETCH_TASKS_PENDING,
  FETCH_TASKS_RESOLVED,
} from "../actionConstants/actionConstants";
import { FETCH_TASKS_API } from "../../api/api";

//for FETCH_TASKS action
export const fetchTasksWorkerSaga = function* () {
  //   console.log("Fetch tasks worker saga");
  yield put({ type: FETCH_TASKS_PENDING });
  try {
    let response = yield axios.get(`${FETCH_TASKS_API}`);
    console.log(response.data.responseData);
    //Here yield() is almost equivalent to await()
    yield put({
      type: FETCH_TASKS_RESOLVED,
      payload: response.data.responseData,
    });
  } catch (err) {
    console.log(err);
  }
};
