import { format } from "date-fns";
const todoReducers = (state, action) => {
  switch (action.type) {
    case "POPULATE_TODOS":
      return action.todos;
    case "ADD_TODO":
      return [
        ...state,
        {
          title: action.title,
          body: action.body,
          inCharge: action.inCharge,
          deadline: format(action.deadline, "yyyy-MM-dd"),
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.title !== action.title);
    case "EDIT_TODO":
      return state.map((todo) => {
        if (todo.title === action.title) {
          return {
            ...todo,
            title: action.title,
            body: action.body,
            inCharge: action.inCharge,
            deadline: format(action.deadline, 'yyyy-MM-dd'),
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export { todoReducers as default };
