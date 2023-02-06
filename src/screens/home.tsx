import React from 'react';
import {FlatList} from 'react-native';

import NoteList from '../components/note-item';
import Button from '../components/button';

import {Layout} from '../components/layout';
import {NavigationProps, Props} from '../utils/types';
import {useSelector} from 'react-redux';
import {ListContainer} from '../common/styles';
import Toast from 'react-native-simple-toast';
import useNote from '../hooks/useNote';

function App({navigation}: NavigationProps) {
  const {setNote} = useNote();
  const notes = useSelector((state: Props) => state.notes);
  const goCategory = () => {
    navigation.push('Categories');
  };

  const selectNote = (item: Props) => {
    setNote(item);
    navigation.push('UpdateNote');
  };

  return (
    <Layout>
      <FlatList
        data={notes.notes}
        renderItem={({item}) => (
          <ListContainer>
            <NoteList
              category={item.category.name}
              client={item.client.name}
              content={item.content}
              onPress={() => selectNote(item)}
            />
          </ListContainer>
        )}
        keyExtractor={item => item.id}
      />
      {notes.notes.length === 0 && Toast.show('There is no any notes.', 3)}
      <Button title="Add notes" onPress={goCategory} />
    </Layout>
  );
}

export default App;
