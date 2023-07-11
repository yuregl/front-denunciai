import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from '../../components/Text';
import { ButtonGps, Container, Form, InputField, UseGpsView } from './styles';

export function NewComplaint() {
  const [complaintTitle, setComplaintTitle] = useState('');
  const [complaintDescription, setComplaintDescription] = useState('');
  const [complaintAddress, setComplaintAddress] = useState('');

  const [focusedTitle, setFocusedTitle] = useState(false);
  const [focusedDescription, setDescription] = useState(false);
  const [focusedAddress, setFocusedAddress] = useState(false);

  return(
    <Container>
      <Form>
        <Text weight='600' size={18} >Descrição</Text>
        <Text weight='600' size={16} style={{paddingTop: 18}} >Título da denúncia</Text>
        <InputField
          isFocused={focusedTitle}
          placeholder='Título'
          style={{backgroundColor: '#FFF'}}
          onChangeText={(e) =>setComplaintTitle(e)}
          value={complaintTitle}
          onFocus={() => {setFocusedTitle(true);}}
          onBlur={() => {setFocusedTitle(false);}}
        />

        <Text weight='600' size={16} style={{paddingTop: 18}} >Descrição da denúncia</Text>
        <InputField
          isFocused={focusedDescription}
          isMultiline={true}
          placeholder='Denúncia'
          style={{backgroundColor: '#FFF'}}
          onChangeText={(e) =>setComplaintDescription(e)}
          value={complaintDescription}
          onFocus={() => {setDescription(true);}}
          onBlur={() => {setDescription(false);}}
          multiline={true}
          numberOfLines={3}
        />

        <Text weight='600' size={16} style={{paddingTop: 18}} >Local</Text>
        <InputField
          isFocused={focusedAddress}
          placeholder='Endereço'
          style={{backgroundColor: '#FFF'}}
          onChangeText={(e) =>setComplaintAddress(e)}
          value={complaintAddress}
          onFocus={() => {setFocusedAddress(true);}}
          onBlur={() => {setFocusedAddress(false);}}
        />
        <UseGpsView>
          <Text>Usar Gps</Text>
          <ButtonGps>
            <MaterialIcons name='gps-fixed' size={22}/>

          </ButtonGps>
        </UseGpsView>
      </Form>
    </Container>
  );
}
