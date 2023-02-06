// redux/reducers/countReducer.js
import _ from 'lodash';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Props} from '../../utils/types';

type StateProps = {
  notes: Array<Props>;
};

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    saveNote(state: StateProps, action: PayloadAction<Props>) {
      state.notes.push(action.payload);
    },
    deleteNote(state: StateProps, action: PayloadAction<string>) {
      const updatedNotes = _.remove(state.notes, function (n: Props) {
        return n.id !== action.payload;
      });
      state.notes = updatedNotes;
    },
    updateNote(state: StateProps, action: PayloadAction<Props>) {
      const updatedNotes = _.map(state.notes, function (n: Props) {
        if (n.id === action.payload.id)
          return {
            ...action.payload,
          };
        return {...n};
      });
      state.notes = updatedNotes;
    },
  },
});

export const { saveNote, deleteNote, updateNote } = notesSlice.actions

export default notesSlice.reducer

