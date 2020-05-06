
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/actionsTypes'

// if you want to show initial data :)
const INITIAL_DATA =  [
    {
        id: 0,
        text: 'Walk the Dog',
        description: 'test',
        priority: 'High',
        duedate: '5/5/2020, 9:35:47 PM'
    },
    {
      id: 1,
      text: 'Walk the Dog',
      description: 'test',
      priority: 'Low',
      duedate: '5/5/2020, 9:35:47 PM'
  },
  {
    id: 2,
    text: 'Walk the Dog',
    description: 'test',
    priority: 'Medium',
    duedate: '5/5/2020, 9:35:47 PM'
},
    
]

const TodoReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_TODO:
        return [
            ...state,{
                id: action.id,
                text: action.text,
                description: action.description,
                priority: action.priority,
                duedate: action.duedate,
                completed: false,
            }
        ]
        case TOGGLE_TODO:
        return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
         )
        case REMOVE_TODO:
        const numIndex = parseInt(action.id)
        return state.filter(todo => todo.id !== numIndex);
     
        default:
        return state
    }
}

export default TodoReducer