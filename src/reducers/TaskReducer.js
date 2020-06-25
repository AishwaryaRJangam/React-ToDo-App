  import { SEARCH_TEXT_SET, PRIORITY_FILTER_SET} from '../actions/actionsTypes'
  const INITIAL_STATE = {
      task: [],
    searchText:'',
    priorityFilter:'High'
  }
 
    export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
      
      case PRIORITY_FILTER_SET: {
        return {
          ...state,
          priorityFilter: action.payload
        }
      }
      case SEARCH_TEXT_SET : {
        return {
          ...state,
          searchText: action.payload
        }
      }
      default:
        return state
    }
  }
  