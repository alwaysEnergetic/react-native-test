import {View, Text} from 'react-native';
import styled from 'styled-components';

export const ListContainer = styled(View)`
  margin: 0 0 5px 0;
`;

export const ScreenTitle = styled(Text)`
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;
  margin: 10px 0;
`;

export const ButtonGroupContainer = styled(View)`
  display: flex;
  gap: 5px;
`;
