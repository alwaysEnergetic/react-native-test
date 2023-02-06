import React, {ReactNode, useCallback, useMemo, useState} from 'react';
import {Props} from '../utils/types';

export type PropsType = {
  children: ReactNode;
};

interface ContextProps {
  selectedClient: Props;
  selectedCategory: Props;
  selectedNote: Props;
  setClient: (client: Props) => void;
  setCategory: (client: Props) => void;
  setNote: (note: Props) => void;
}

const NoteContext = React.createContext<ContextProps | null>(null);

const NoteContextProvider = ({children}: PropsType) => {
  const [selectedNote, setSelctedNote] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});
  const [selectedClient, setSelectedClient] = useState({});

  const setClient = useCallback((client: Props) => {
    setSelectedClient(client);
  }, []);

  const setCategory = useCallback((category: Props) => {
    setSelectedCategory(category);
  }, []);

  const setNote = useCallback((note: Props) => {
    setSelctedNote(note);
  }, []);

  const value = useMemo(
    () => ({
      selectedNote,
      selectedCategory,
      selectedClient,
      setClient,
      setCategory,
      setNote,
    }),
    [
      selectedNote,
      selectedCategory,
      selectedClient,
      setClient,
      setCategory,
      setNote,
    ],
  );

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export {NoteContext, NoteContextProvider};
