import ACTION_TYPES from '../actions/actionTypes';
import CONSTANTS from '../constants';

const initialState = {
  theme: CONSTANTS.THEMES.BEIGE,
};

const toDoThemeReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
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

export default toDoThemeReducer;
