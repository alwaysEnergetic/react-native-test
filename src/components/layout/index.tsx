import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';

const StyledView = styled(SafeAreaView)`
  padding: 5px;
  flex: 1;
  justify-content: center;
`;

export const Layout = ({children}: any) => {
  return <StyledView>{children}</StyledView>;
};
