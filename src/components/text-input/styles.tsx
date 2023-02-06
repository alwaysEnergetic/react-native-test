import {TextInput} from 'react-native';
import styled from 'styled-components';

export const StyledTextInput = styled(TextInput)`
  height: 300px;
  border: 1px solid ${props => props.theme.colors.background.neutral};
  padding:5px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
`;
