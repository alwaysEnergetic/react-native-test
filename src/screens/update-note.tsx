import React, {useEffect} from 'react';
import Toast from 'react-native-simple-toast';
import {Text} from 'react-native';

import Button from '../components/button';
import TextInput from '../components/text-input';

import {Layout} from '../components/layout';
import {NavigationProps, Props} from '../utils/types';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonGroupContainer} from '../common/styles';
import {deleteNote, updateNote} from '../redux/actions/notes_action';

function UpdateNote({navigation}: NavigationProps) {
  const [text, onChangeText] = React.useState('');
  const dispatch = useDispatch();
  const note = useSelector((state: Props) => state.notes.selectedNote);

  const update = (note: Props) => {
    if(text){
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
      Toast.show("Please enter note",3)
    }
    
  };

  const deleteNoteById = (id: string) => {
    dispatch(deleteNote(id));
    navigation.popToTop();
  };

  useEffect(() => {
    onChangeText(note.content);
  }, [note]);

  return (
    <Layout>
      <ButtonGroupContainer>
        <Text>{`Category: ${note.category.name}`}</Text>
        <Text>{`Client: ${note.client.name}`}</Text>
        <TextInput onChange={onChangeText} value={text} placeholder='Please enter note'/>
        <Button title="Edit Note" onPress={() => update(note)} />
        <Button
          title="Delete Note"
          onPress={() => deleteNoteById(note.id)}
          error
        />
      </ButtonGroupContainer>
    </Layout>
  );
}

export default UpdateNote;
