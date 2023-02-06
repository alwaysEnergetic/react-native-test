import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface Props {
  [key: string]: any;
}

export type RootStackParamList = {
  Notes: undefined;
  Categories: undefined;
  Home: undefined;
  Clients: undefined;
  UpdateNote: undefined;
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
