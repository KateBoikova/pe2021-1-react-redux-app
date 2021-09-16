import ACTION_TYPES from '../actions/actionTypes';
import CONSTANTS from '../constants';

const initialState = {
  tasks: [],
  theme: CONSTANTS.THEMES.BEIGE,
};

const toDoPageReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.CREATE_TASK_ACTION: {
      const { newTask } = action;
      const { tasks } = state;

      const task = { ...newTask, id: Date.now(), isDone: false };
      const newTasks = [...tasks, task];
      return { ...state, tasks: newTasks };
    }

    case ACTION_TYPES.UPDATE_TASK_ACTION: {
      const { tasks } = state;
      const { id } = action;

      const index = tasks.findIndex(task => id === task.id);
      tasks[index].isDone = !tasks[index].isDone;
      return { ...state, tasks: [...tasks] };
    }

    case ACTION_TYPES.DELETE_TASK_ACTION: {
      const { tasks } = state;
      const { id } = action;

      const newTasks = tasks.filter(task => id !== task.id);
      return { ...state, tasks: newTasks };
    }
    case ACTION_TYPES.CHANGE_THEME_ACTION: {
      const { theme } = state;

      const newTheme =
        theme === CONSTANTS.THEMES.BEIGE
          ? CONSTANTS.THEMES.BLACK
          : CONSTANTS.THEMES.BEIGE;
      return { ...state, theme: newTheme };
    }
    default:
      return state;
  }
};

export default toDoPageReducer;
