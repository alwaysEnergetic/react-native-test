import React, {useEffect} from 'react';
import Toast from 'react-native-simple-toast';
import {Text} from 'react-native';

import Button from '../components/button';
import TextInput from '../components/text-input';

import {Layout} from '../components/layout';
import {NavigationProps, Props} from '../utils/types';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonGroupContainer} from '../common/styles';
import useNote from '../hooks/useNote';
import _ from 'lodash';
import { deleteNote, updateNote } from '../redux/reducers/notes_slice';

function UpdateNote({navigation}: NavigationProps) {
  const [text, onChangeText] = React.useState('');
  const dispatch = useDispatch();
  const {selectedNote} = useNote();

  const update = (note: Props) => {
    if (text) {
      dispatch(
        updateNote({
          id: note.id,
          category: {...note.category},
          client: {...note.client},
          content: text,
        }),
      );
      onChangeText('');
      navigation.popToTop();
    } else {
      Toast.show('Please enter note', 3);
    }
  };

  const deleteNoteById = (id: string) => {
    dispatch(deleteNote(id));
    navigation.popToTop();
  };

  useEffect(() => {
    !_.isEmpty(selectedNote);
    onChangeText(selectedNote.content);
  }, [selectedNote]);

  return (
    <Layout>
      <ButtonGroupContainer>
        <Text>{`Category: ${selectedNote.category.name}`}</Text>
        <Text>{`Client: ${selectedNote.client.name}`}</Text>
        <TextInput
          onChange={onChangeText}
          value={text}
          placeholder="Please enter note"
        />
        <Button title="Edit Note" onPress={() => update(selectedNote)} />
        <Button
          title="Delete Note"
          onPress={() => deleteNoteById(selectedNote.id)}
          error
        />
      </ButtonGroupContainer>
    </Layout>
  );
}

export default UpdateNote;
