// redux/reducers/countReducer.js
import _ from 'lodash';
import {
  ADD_NOTES,
  GET_NOTES,
  UPDATE_NOTE,
  DELETE_NOTE,
  SELECTED_CATEGORY,
  SELECTED_CLIENT,
  SELECTED_NOTE,
  UNSELECTED_NOTE,
} from '../actions/action_types';
import {Props} from '../../utils/types';

const initialState = {
  notes: [],
  selectedNote: {},
  selectedCategory: {},
  selectedClient: {},
};

export default (state = initialState, action: Props) => {
  switch (action.type) {
    case ADD_NOTES:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case GET_NOTES:
      return {
        ...state,
      };
    case DELETE_NOTE:
      const notes = _.remove(state.notes, function (n: Props) {
        return n.id !== action.payload;
      });
      return {
        ...state,
        notes: [...notes],
      };
    case UPDATE_NOTE:
      const updatedNotes = _.map(state.notes, function (n: Props) {
        if (n.id === action.payload.id)
          return {
            ...action.payload,
          };
        return {...n};
      });

      return {
        ...state,
        notes: [...updatedNotes],
      };
    case SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case SELECTED_CLIENT:
      return {
        ...state,
        selectedClient: action.payload,
      };
    case SELECTED_NOTE:
      return {
        ...state,
        selectedNote: action.payload,
      };
    case UNSELECTED_NOTE:
      return {
        ...state,
        selectedNote: {},
      };
    default:
      return state;
  }
};
