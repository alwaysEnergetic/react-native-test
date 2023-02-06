import {useContext} from 'react';
import { NoteContext } from '../context/noteContext';

const useNote = () => {
  const context = useContext(NoteContext);

  if (!context) {
    throw new Error('Note context must be use inside NoteContextProvider');
  }

  return context;
};

export default useNote;
