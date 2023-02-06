import {StyledTextInput} from './styles';

interface Props {
  placeholder?: string;
  value?: string;
  onChange: any;
}

export default function TextInput({onChange, value, placeholder = ''}: Props) {
  return (
    <StyledTextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      multiline={true}
      textAlignVertical="top"
    />
  );
}
