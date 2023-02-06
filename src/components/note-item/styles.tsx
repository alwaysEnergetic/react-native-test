import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';

export const StyledContainer = styled(TouchableOpacity)`
  display: flex;
  padding: 5px;
  justify-content: center;
  border-radius: ${props=>props.theme.button.borderRadius}px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary.lighter};
`;
