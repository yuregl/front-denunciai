import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  SearchBarView,
  SearchBar,
  ButtonSearch,
  ComplaintsContainer,
  Complaints,
  ImageComplaint,
  ComplaintsDescription,
  SeparatorItem,
  WithoutComplaints
} from './styles';
import { ViewAllComplaints } from '../../interfaces/getAllComplaints';
import { Text } from '../../components/Text';
import { allComplaints } from '../../mocks/complaints';

export function Home(){
  const navigation = useNavigation();

  const [api] = useState<Array<ViewAllComplaints>>(allComplaints);
  const [findByName, setFindByName] = useState('');
  const [findComplaints, setFindComplaints] = useState<Array<ViewAllComplaints>>(allComplaints);

  useEffect(() => {
    const filterArray =  api.filter(element => {
      if(element.title.includes(findByName)){
        return element;
      }
    });

    setFindComplaints(filterArray);
  } , [findByName]);

  function selectComplaint(complaintId: string) {
    navigation.navigate('complaintsDescription', { complaintId });
  }
  return(
    <Container>
      <SearchBarView
        style={{backgroundColor: '#FFF'}}
      >
        <SearchBar
          onChangeText={(e) =>setFindByName(e)}
          value={findByName}
        />
        <ButtonSearch>
          <Foundation
            name="magnifying-glass"
            size={24}
            color="#FF473A"
          />
        </ButtonSearch>
      </SearchBarView>
      {
        findComplaints.length === 0 ?
          (
            <WithoutComplaints>
              <Text
                weight='700'
                color='#FF473A'
                size={40}
              >
                {api.length === 0 ? 'Ainda não foi realizado nenhuma denúncia' : 'Não foi encontrado nenhuma denúncia.'}
              </Text>
            </WithoutComplaints>
          )
          : (
            <>
              <ComplaintsContainer>
                <FlatList
                  data={findComplaints}
                  keyExtractor={complaints => complaints.id}
                  style={{marginTop: 32}}
                  showsVerticalScrollIndicator={false}
                  ItemSeparatorComponent={SeparatorItem}
                  renderItem={({item: complaint}) => (
                    <Complaints onPress={() => {
                      selectComplaint(complaint.id);
                    }}>
                      <ImageComplaint
                        source={{uri: complaint.files[0].url}}
                      />
                      <ComplaintsDescription>
                        <Text
                          weight='600'
                          color='#FF473A'
                          size={16}
                          numberOfLines={2}
                        >{complaint.title}</Text>
                        <Text
                          style={{marginVertical: 8}}
                          size={14}
                          numberOfLines={2}
                        >{complaint.description}</Text>
                      </ComplaintsDescription>
                    </Complaints>
                  )}
                />
              </ComplaintsContainer>
            </>
          )
      }

    </Container>
  );
}
