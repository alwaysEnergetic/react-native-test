import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import Theme from './src/theme';
import Navigator from './src/navigation/navigator';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';

const App = () => {
  return (
    <Theme>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </Theme>
  );
};

export default App;
