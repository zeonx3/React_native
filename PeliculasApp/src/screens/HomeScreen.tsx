import React from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native/';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const {width: windowWidth }  = Dimensions.get('window');

export const HomeScreen = () => {

  const {nowPlaying,isLoading, popular, topRated,upComing} = useMovies();
  const { top } = useSafeAreaInsets();

  if(isLoading){
    return(
      <View style={{
        flex:1, justifyContent:'center', alignContent:'center'
      }}>
        <ActivityIndicator color='red' size={50}/>
      </View>
    )
  }

  return (
  <ScrollView>

    <View style={{
        marginTop: top + 20 
      }}>
        {/* Carrusel */}
          <View style={{height:400}}>
              <Carousel
                data={nowPlaying}
                renderItem={({item}: any) => <MoviePoster movie={item}/>}
                sliderWidth={windowWidth}
                itemWidth={300}
                inactiveSlideOpacity={0.9}
              />
          </View>

          {/*lista peliculas*/}
          <HorizontalSlider title='Now Playing' movie={nowPlaying}/>
          <HorizontalSlider title='Popular' movie={popular}/>
          <HorizontalSlider title='Top Rated' movie={topRated}/>
          <HorizontalSlider title='Up Coming' movie={upComing}/>

          
    </View>

  </ScrollView>
    
  )
}
