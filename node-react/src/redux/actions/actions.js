//Actions dispatched in component -> Root saga (Maps perticular worker saga) -> Worker saga
import { DUMMY_ACTION, FETCH_TASKS } from "../actionConstants/actionConstants";

export const fetchTasks = () => ({
  type: FETCH_TASKS,
});

export const dummyAction = () => {
  return {
    type: DUMMY_ACTION,
  };
};
