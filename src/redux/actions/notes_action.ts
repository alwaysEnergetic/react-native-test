import {Props} from '../../utils/types';
import {
  ADD_NOTES,
  DELETE_NOTE,
  SELECTED_CATEGORY,
  SELECTED_CLIENT,
  SELECTED_NOTE,
  UNSELECTED_NOTE,
  UPDATE_NOTE,
} from './action_types';

export const setCategory = (category: Props) => {
  return {
    type: SELECTED_CATEGORY,
    payload: category,
  };
};

export const setClient = (client: Props) => {
  return {
    type: SELECTED_CLIENT,
    payload: client,
  };
};

export const saveNote = (note: Props) => {
  return {
    type: ADD_NOTES,
    payload: note,
  };
};

export const setNote = (note: Props) => {
  return {
    type: SELECTED_NOTE,
    payload: note,
  };
};

export const unselectNote = () => {
  return {
    type: UNSELECTED_NOTE,
    payload: {},
  };
};

export const updateNote = (note: Props) => {
  return {
    type: UPDATE_NOTE,
    payload: note,
  };
};

export const deleteNote = (id: string) => {
    return {
      type: DELETE_NOTE,
      payload: id,
    };
  };
