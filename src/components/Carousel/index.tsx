
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { IFilesComplaints } from '../../interfaces/FilesComplaints';
import { ButtonPreviosAndNext, Image, ImageContainer } from './styles';

export function Carousel(props:{ files: Array<IFilesComplaints> }) {
  const [indexFiles, setIndexFiles] = useState(0);

  function nextAndPreviosFile(add: number) {
    if(indexFiles < props.files.length && indexFiles >= 0){
      setIndexFiles(indexFiles + add);
    }
  }

  function disableButtonLeft() {
    return indexFiles === 0;
  }

  function disableButtonRight() {
    return indexFiles === props.files.length-1;
  }

  return(
    <ImageContainer>
      <ButtonPreviosAndNext disabled={disableButtonLeft()} onPress={() => nextAndPreviosFile(-1)}>
        <AntDesign name='left' size={25} style={{marginRight: 5}} color={`${disableButtonLeft() === true ?  '#808080' :'#000' }`}/>
      </ButtonPreviosAndNext>
      <Image source={{uri: props.files[indexFiles].url}}/>
      <ButtonPreviosAndNext disabled={disableButtonRight()} onPress={() => nextAndPreviosFile(1)}>
        <AntDesign name='right' size={25} style={{marginLeft: 5}} color={`${disableButtonRight() === true ?  '#808080' :'#000' }`}/>
      </ButtonPreviosAndNext>
    </ImageContainer>
  );
}
