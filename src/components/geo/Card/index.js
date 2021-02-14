import React from 'react';
import {PressItem, Image, Name, Artist, More, InfoContainer} from './styles'


const Card = ({item}) => {
  console.log(item)
  return (
    <PressItem>
      <Image
        source={{
          uri: item.image[3]['#text'],
        }}
      />
      <InfoContainer>
      <Name>{item.name}</Name>
      <Artist>{item.artist.name}</Artist>
      <More>Tap to view more</More>
      </InfoContainer>
    </PressItem>
  );
};

export default Card;