import {Text} from 'react-native';
import {StyledContainer} from './styles';

interface Props {
  category: string;
  client: string;
  content: string;
  onPress: any;
}

export default function NoteList({category, client, content, onPress}: Props) {
  return (
    <StyledContainer onPress={onPress}>
      <Text>{`Category: ${category}`}</Text>
      <Text>{`Client: ${client}`}</Text>
      <Text>{content}</Text>
    </StyledContainer>
  );
}
