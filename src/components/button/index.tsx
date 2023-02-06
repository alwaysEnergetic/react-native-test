import {Text} from 'react-native';
import {StyledButton} from './styles';

interface Props {
  title: string;
  error?: boolean;
  onPress: any;
}

export default function Button({title, error, onPress}: Props) {
  return (
    <StyledButton onPress={onPress} error={error}>
      <Text>{title}</Text>
    </StyledButton>
  );
}
