import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';

export const StyledButton = styled(TouchableOpacity)<{error?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.button.borderRadius}px;
  height: 50px;
  width: 100%;
  background-color: ${props =>
    props.error
      ? props.theme.colors.primary.error
      : props.theme.colors.primary.main};
`;
