import React from 'react'
import { View } from 'react-native/';
import { Movie } from '../interfaces/movieInterface';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const navigation = useNavigation();

  return (
   <TouchableOpacity 
   activeOpacity={0.8}
   style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom:20,
        paddingHorizontal:7
        }}
    onPress={()=> navigation.navigate('DetailScreen', movie)}>
        <View style={styles.imageContainer}>
            <Image
                source={{ uri }}
                style={styles.image}
            />
        </View>
          
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    imageContainer:{
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
        borderRadius: 18,
    },
    image:{
        flex: 1,
        borderRadius: 18,
    },

});