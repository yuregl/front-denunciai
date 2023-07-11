import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps {
  children: string;
  onPress:() => void;
}

export function Button({ children, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <Text weight='600' color='#FFF'>
        {children}
      </Text>
    </Container>
  );
}
