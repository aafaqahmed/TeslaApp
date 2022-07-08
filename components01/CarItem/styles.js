import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    mainImage: {
        position:'absolute',
        width:'100%',
        height:'100%',
        resizeMode: 'cover',
      },
    
      carContainer: {
        width:'100%',
        height:Dimensions.get('window').height,
      },
    
      titles: {
        marginTop:'30%',
        width:'100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
      },
      subtitle: {
        fontSize: 16,
        color: '#5c5e62'
      },
      subtitleCTA: {
        textDecorationLine:'underline'
      },
      buttonContainer:{
        position: "absolute",
        width:'100%',
        bottom:50,
      }
});

export default styles;