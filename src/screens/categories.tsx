import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../components/button';
import data from '../mock/data.json';
import {Layout} from '../components/layout';
import {NavigationProps, Props} from '../utils/types';
import {ListContainer, ScreenTitle} from '../common/styles';
import {setCategory} from '../redux/actions/notes_action';

function Categories({navigation}: NavigationProps) {
  const dispatch = useDispatch();

  const goClients = (item: Props) => {
    dispatch(setCategory(item));
    navigation.push('Clients');
  };

  return (
    <Layout>
      <ScreenTitle>Please select the Category</ScreenTitle>

      <FlatList
        data={data.categories}
        renderItem={({item}) => (
          <ListContainer>
            <Button title={item.name} onPress={() => goClients(item)} />
          </ListContainer>
        )}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
}

export default Categories;
