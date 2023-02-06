import { createStore, combineReducers, applyMiddleware } from 'redux';
import NoteReducer from './reducers/notes_reducer';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['notes']
  };

const rootReducer = combineReducers({
  notes: persistReducer(persistConfig, NoteReducer),
});
 
export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);