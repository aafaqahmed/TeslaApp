import React from 'react';
import styles from './styles'

import { View, Text,ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
  const {name, tagline, taglineCTA, image} = props.car;
    return (
    <View style={styles.carContainer}>
      <ImageBackground 
        style={styles.mainImage}
        source={image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}> {name} </Text>
          <Text style={styles.subtitle}> {tagline} 
            {' '}
            <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <StyledButton 

          type='primary' 
          content= {"Custom Order"}
          onPress={()=>{
            console.warn('Custom Order Pressed')
          }}

          />
          <StyledButton 

          type='secondary' 
          content= {"Existing Investory"}
          onPress = {()=>{
            console.warn('Existing Investory Pressed')
          }}

          />
        </View>
        
      </View>
    );
};

export default CarItem;