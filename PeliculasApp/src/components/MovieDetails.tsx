import React from 'react'
var currencyFormatter = require('currency-formatter');
import { View, Text } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
     
    movieFull : MovieFull;
    cast : Cast;

}

export const MovieDetails = ({movieFull, cast}: Props) => {




  return (
   <View>
    
        {/*Detalles*/}
        <View style={{ marginHorizontal:20}}>
            <View style={{ flexDirection:'row'}}>
                <Icon
                    name="star-outline"
                    color="grey"
                    size={16}    
                />
                <Text>{movieFull.vote_average}</Text>
                <Text style={{marginLeft:5}}>
                    - { movieFull.genres.map( g => g.name).join(', ') }
                </Text>
            </View>
        </View>
        <Text style={{fontSize:20, marginTop:10, fontWeight:'bold'}}>Historia</Text>
        <Text style={{fontSize:16}} >{movieFull.overview}</Text>
        <Text style={{fontSize:20, marginTop:10, fontWeight:'bold'}}>Presupuesto</Text>
        <Text style={{fontSize:18}} >{currencyFormatter.format(movieFull.budget, {code:'USD'})}</Text>
        {/*Casting */}
        <View style={{marginTop:10, marginBottom:100}}>
        <Text style={{fontSize:20, marginTop:10, fontWeight:'bold', marginHorizontal:20}}>Actores</Text>
            {/* <CastItem actor={cast[0]}/> */}
            <FlatList 
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <CastItem actor={item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginTop:10,height:60}}
            />
        </View>
   </View>
  )
}
