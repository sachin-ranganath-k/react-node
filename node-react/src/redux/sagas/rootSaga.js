//Root saga executes once application starts (In the beginning)
//Add rootSaga in the store
//Root saga invokes the worker saga whenever specific action task dispatched
//Actions dispatched in component -> Root saga (Maps perticular worker saga) -> Worker saga
//Root saga must be a generator function
import { takeEvery } from "redux-saga/effects";
import { FETCH_TASKS } from "../actionConstants/actionConstants";
import { fetchTasksWorkerSaga } from "./workerSagas";

export const rootSaga = function* () {
  console.log("Root saga called");
  yield takeEvery(FETCH_TASKS, fetchTasksWorkerSaga);
};
