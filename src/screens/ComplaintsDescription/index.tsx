import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../components/Text';
import {
  Container,
  Header,
  Body,
  ImageContainerCarousel,
  ContainerDescription,
  Description,
  StatusDescription,
  ButtonArea
} from './styles';

import { allComplaints } from '../../mocks/complaints';
import { Button } from '../../components/Button';
import { Carousel } from '../../components/Carousel';
import { ConfirmDeleteComplaint } from '../../Modal/ConfirmDeleteComplaint';
import { useState } from 'react';

type ParamsProps = {
  complaintId: string
}

interface IStatusDescription {
  [key: string]: {
    status: string,
    description: string
  }
}

const statusDescriptions: IStatusDescription = {
  sent: {
    status: 'Em andamento',
    description: 'Encaminhada para os orgãos responsáveis'
  }
};

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setemrbo',
  'Outubro',
  'Novembro',
  'Dezembro'
];

export function ComplaintsDescription() {
  const navigation = useNavigation();
  const [visibleModal, setVisibleModal] = useState(false);

  const route = useRoute();
  const { complaintId } = route.params as ParamsProps;

  function handleGoBackScreen() {
    navigation.goBack();
  }

  function formateDate(date: string): string {
    const dateValue = new Date(date);
    const mouthNumber = dateValue.getMonth();
    return `${dateValue.getDate()} ${months[mouthNumber]} ${dateValue.getFullYear()} - ${dateValue.getUTCHours()}:${dateValue.getMinutes().toString().length == 1? `0${dateValue.getMinutes()}` : dateValue.getMinutes()}h`;
  }

  function changeVisibleModal() {
    setVisibleModal(!visibleModal);
  }

  return(
    <>
      <Container>
        <Header>
          <Text
            weight='600'
            size={20}
            numberOfLines={2}
          >{allComplaints[0].title}</Text>
          <Text weight='600' color='gray' style={{paddingVertical: 5}}>{allComplaints[0].address}</Text>
          <Text weight='600' color='gray' size={14}>{formateDate(allComplaints[0].created_at)}</Text>
        </Header>
        <Body>
          <ImageContainerCarousel>
            <Carousel files={allComplaints[0].files}/>
          </ImageContainerCarousel>
          <ContainerDescription>
            <Text weight='600' size={18} style={{
              paddingVertical: 10
            }}>Description</Text>
            <Description
              showsVerticalScrollIndicator={false}
            >
              <Text weight='600' size={14}>
                {allComplaints[0].description}
              </Text>
            </Description>
          </ContainerDescription>
          <StatusDescription>
            <Text size={18} color='#3EC28F' weight='700'>{statusDescriptions[allComplaints[0].status].status}</Text>
            <Text size={16} color='#F2994A' weight='600'>{statusDescriptions[allComplaints[0].status].description}</Text>
          </StatusDescription>

          <ButtonArea>
            <Button onPress={() => changeVisibleModal()}>
            Remover Denuncia
            </Button>

            <Button onPress={() => handleGoBackScreen()}>
            Voltar
            </Button>
          </ButtonArea>
        </Body>
      </Container>
      <ConfirmDeleteComplaint
        visible={visibleModal}
        complaintId={complaintId}
        onClose={() => changeVisibleModal()}
      />
    </>
  );
}
