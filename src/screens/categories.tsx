import React from 'react';
import {FlatList} from 'react-native';

import Button from '../components/button';
import data from '../mock/data.json';
import {Layout} from '../components/layout';
import {NavigationProps, Props} from '../utils/types';
import {ListContainer, ScreenTitle} from '../common/styles';
import useNote from '../hooks/useNote';

function Categories({navigation}: NavigationProps) {
  const {setCategory} = useNote();

  const goClients = (item: Props) => {
    setCategory(item);
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
