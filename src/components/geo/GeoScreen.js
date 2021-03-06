import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import getGeoTopTracks from '../../services/getGeoTopTrack'
import Card from './Card/index'


const GeoScreen = (props) => {

  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    getGeoTopTracks().then((data) => {
      setTracks(data.tracks.track);
      setLoading(false);
    });
  }, []);


  const handlePress = (track)=>{
    props.navigation.navigate('track detail', track);
  }
  
  return (
    <View>
      {loading ? <ActivityIndicator color="#000" size="large" /> : null}
      <FlatList
        data={tracks}
        renderItem={({item}) => <Card item={item}  onPress={()=>handlePress(item)} />}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
};

export default GeoScreen;