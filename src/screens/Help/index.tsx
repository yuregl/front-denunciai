import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { AreaButton, Container, ContainerContactUs, ContainerInstructios, Instructions, InstructionsLine, Title } from './styles';

interface IInstructions {
  id: string;
  step: string;
  instruction: string;
}

const instructions: Array<IInstructions> = [
  {
    id: '1',
    step: 'Passo 1',
    instruction: 'Deve-se digitar o título da denúncia'
  },
  {
    id: '2',
    step: 'Passo 2',
    instruction: 'Deve-se digitar a descrição da denúncia'
  },
  {
    id: '3',
    step: 'Passo 3',
    instruction: 'Deve-se escolher entre se identificar ou não'
  },
  {
    id: '4',
    step: 'Passo 4',
    instruction: 'Pode se escolher entre gravar um vídeo ou tirar foto'
  }
];

export function Help() {
  const navigation = useNavigation();

  function gotoBack() {
    navigation.goBack();
  }
  return(
    <Container>
      <ContainerInstructios>
        <Title>
          <Text weight='600' size={24}>Como efetuar uma denúncia</Text>
        </Title>
        <Instructions>
          <FlatList
            data={instructions}
            keyExtractor={instructions => instructions.id}
            showsVerticalScrollIndicator={false}
            style={{marginTop: 32}}
            renderItem={({item: instruction}) =>(
              <InstructionsLine>
                <Text weight='600' style={{}}>{instruction.step}:</Text>
                <Text> {instruction.instruction}</Text>
              </InstructionsLine>
            )}
          />
        </Instructions>
      </ContainerInstructios>
      <ContainerContactUs>
        <Text weight='600'>Dúvidas ou problemas, entre em contato pelo</Text>
        <Text weight='600'>e-mail abaixo:</Text>
        <Text color='#FF473A' weight='600' style={{paddingTop: 20}}>faleconosco@denunciai.com.br</Text>
      </ContainerContactUs>
      <AreaButton>
        <Button onPress={gotoBack}>Voltar</Button>
      </AreaButton>
    </Container>
  );
}
