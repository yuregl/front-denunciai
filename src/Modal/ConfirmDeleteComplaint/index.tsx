import { Modal, Platform} from 'react-native';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';

import { ModalBody, Overlay, Header, ButtonArea } from './styles';

interface ModalConfirmDelete {
  visible: boolean;
  complaintId: string;
  onClose: () => void;
}

export function ConfirmDeleteComplaint({visible, complaintId, onClose }: ModalConfirmDelete) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay>
        <ModalBody>
          <Header>
            <Text weight='600'>Tem certeza que quer deletar a denúncia?</Text>
          </Header>
          <ButtonArea>
            <Button onPress={() => alert('Deletar')}>Deletar</Button>
            <Button onPress={() => onClose()}>Cancelar</Button>
          </ButtonArea>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}

