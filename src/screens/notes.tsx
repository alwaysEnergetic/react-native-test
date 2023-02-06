import React from 'react';
import Toast from 'react-native-simple-toast';

import Button from '../components/button';
import TextInput from '../components/text-input';

import {Layout} from '../components/layout';
import {NavigationProps} from '../utils/types';
import { useDispatch } from 'react-redux';
import { makeid } from '../utils/helpers';
import useNote from '../hooks/useNote';
import { saveNote } from '../redux/reducers/notes_slice';

function Notes({navigation}: NavigationProps) {
  const [text, onChangeText] = React.useState('');
  const dispatch = useDispatch();
  const {selectedClient, selectedCategory} = useNote()

  const goCategory = () => {
    if(text){
      dispatch(saveNote({
        id: makeid(10),
        category:{...selectedCategory},
        client:{...selectedClient},
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
