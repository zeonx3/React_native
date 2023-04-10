import React from 'react'
import { View, Dimensions, ScrollView, Text, ActivityIndicator } from 'react-native/';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackBavigator } from '../navigator/StackNavigator';
import { Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props  extends StackScreenProps<RootStackBavigator, 'DetailScreen'>{};
   
const screenHieght = Dimensions.get('window').height;

export const DetailScreen = ( {route, navigation}:Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetail(movie.id);


  return (
    <ScrollView>
        <View style={styles.imageContainer} >
            <View style={styles.imageBorder}>
                <Image
                    source={{ uri }}
                    style={styles.posterImage}
                />
            </View>
            
        </View>
        <View style={styles.marginContainer}>
            <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.subTitle}>{movie.title}</Text>

            {
                isLoading ? 
                <ActivityIndicator
                size={30}
                color='grey'
                style={{  marginTop: 20}}
            />
            : <MovieDetails movieFull={movieFull!} cast={cast}/>
            }
        </View>
        <View style={styles.backButton}>
            <TouchableOpacity onPress={() =>navigation.pop()}>
                <Icon
                name='arrow-back-outline'
                color={'white'}
                size={50}
                />
            </TouchableOpacity>
        </View>
        
        

    </ScrollView>
    

    )
}

const styles = StyleSheet.create({
    
    imageContainer:{
        width: '100%',
        height:screenHieght * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder:{
        flex:1,
        overflow:'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage:{
        flex:1
    },
    marginContainer:{
        marginHorizontal:20,
        marginTop:20,
    },
    subTitle:{
        fontSize:16,
        opacity: 0.8
    },
    title:{
        fontSize:20,
        fontWeight: 'bold'
    },
    backButton:{
        position:'absolute',
        zIndex:999,
        elevation:9,
        top:30,
        left:5
    }
})