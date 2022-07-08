import React from 'react';
import styles from './styles';
import {View,Text, Pressable} from 'react-native';

const StyledButton = (props) => {

    const {type, content, onPress} = props;

    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';


    return (
        <View style={styles.container}>
        
            <Pressable 
                onPress={()=>onPress()}
                style={[styles.button, {backgroundColor: backgroundColor}]}
            >
                <Text style={[styles.text, {color: textColor}]}> {content} </Text>
            </Pressable>
            
        </View>
    );
};

export default StyledButton;