import React from 'react';
import Toast from 'react-native-simple-toast';

import Button from '../components/button';
import TextInput from '../components/text-input';

import {Layout} from '../components/layout';
import {NavigationProps, Props} from '../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { saveNote } from '../redux/actions/notes_action';
import { makeid } from '../utils/helpers';

function Notes({navigation}: NavigationProps) {
  const [text, onChangeText] = React.useState('');
  const dispatch = useDispatch();
  const notes = useSelector((state: Props) => state.notes);

  const goCategory = () => {
    if(text){
      dispatch(saveNote({
        id: makeid(10),
        category:{...notes.selectedCategory},
        client:{...notes.selectedClient},
        content:text
      }))
      onChangeText("")
      navigation.popToTop();
    } else {
      Toast.show("Please enter note",3)
    }
    
  };

  return (
    <Layout>
      <TextInput onChange={onChangeText} value={text} placeholder='Please enter note'/>
      <Button title="Leave Notes" onPress={goCategory} />
    </Layout>
  );
}

export default Notes;
