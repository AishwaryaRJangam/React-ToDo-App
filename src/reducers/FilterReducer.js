import {
  SHOW_ALL,
  SET_VISIBILITY_FILTER,
  // PRIORITY_FILTER_SET
} from "../actions/actionsTypes";

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
        // case PRIORITY_FILTER_SET:
        //   return action.payload;
        // case PRIORITY_FILTER_SET:
        //   return action.payload;
    default:
      return state;
  }
};

export default visibilityFilter;
