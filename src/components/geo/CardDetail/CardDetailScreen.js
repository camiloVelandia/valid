import React, {useState, useEffect} from 'react';
import {Container, Artist, Name, Duration, Image, Listeners, Rank, Url, UrlText} from './styles'
import {Linking} from 'react-native';


const CardDetailScreen = (props) => {
  
  const [info, setInfo] = useState({artist:{},["@attr"]:{rank:''} });

  useEffect(()=>{
    setInfo(props.route.params);
  },[props])

  function secondsToString(seconds) {
    var hour = Math.floor(seconds / 3600);
    hour = hour < 10 ? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = minute < 10 ? '0' + minute : minute;
    var second = seconds % 60;
    second = second < 10 ? '0' + second : second;
    return hour + ':' + minute + ':' + second;
  }

  return (
    <Container>
      <Artist>{info.artist.name}</Artist>
      <Name>{info.name}</Name>
      <Duration>Duration: {secondsToString(info.duration)}min</Duration>
      <Listeners>Listeners: {info.listeners}</Listeners>
      <Rank>Rank: {parseInt(info['@attr'].rank) + 1}</Rank>
      <Url onPress={() => Linking.openURL(info.url)}>
        <UrlText>view more</UrlText>
      </Url>
    </Container>
  );
};

export default CardDetailScreen;