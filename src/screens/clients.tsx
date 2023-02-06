import React from 'react';
import {FlatList} from 'react-native';

import Button from '../components/button';
import data from '../mock/data.json';

import {Layout} from '../components/layout';
import {NavigationProps, Props} from '../utils/types';
import {ListContainer, ScreenTitle} from '../common/styles';
import useNote from '../hooks/useNote';

function Clients({navigation}: NavigationProps) {
  const {setClient} = useNote()
  const goClients = (item: Props) => {
    setClient(item);
    navigation.push('Notes');
  };

  return (
    <Layout>
      <ScreenTitle>Please select the Clients</ScreenTitle>

      <FlatList
        data={data.clients}
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

export default Clients;
