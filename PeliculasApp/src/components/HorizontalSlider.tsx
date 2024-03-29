import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { View, Text, FlatList } from 'react-native/';
import { MoviePoster } from './MoviePoster';

interface Props{
    title?: string;
    movie: Movie[];
}

export const HorizontalSlider = ({title, movie}:Props) => {


  return (
    <View style={{ height:(title) ? 260 : 210}}>
        {
            title &&  <Text style={{ fontSize:30, fontWeight:'bold', marginLeft:10}}>{title}</Text>
        }
    
        <FlatList
            data={movie}
            renderItem={({item}: any) =>(
                <MoviePoster movie={item} width={140} height={200}/>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
    </View>
   )
}
