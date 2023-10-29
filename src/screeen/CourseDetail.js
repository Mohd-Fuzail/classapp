import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CourseDetail = () => {
  const route = useRoute();
  const { course } = route.params;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
      <Text style={styles.title1}>Title: {course.title}</Text>
      <Text style={styles.title2}>Description: {course.description}</Text>
     
      <Text style={styles.title3}>Topics: {course.topics.join(', ')}</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={()=>Alert.alert('💔" Curently we are working on this feature... "💔')}
      >
      <Text style={styles.title4}>Price: {course.price}</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer:{
    paddingHorizontal:20

  },
  container:{
     padding:30,
     backgroundColor:'rgba(255,255,255,0.90)',
     textAlign:'center',
     borderRadius:5,
     shadowColor:'grey',
     shadowOffset:{width:0,height:0},
     shadowOpacity:0.5,
     shadowRadius:8,
     elevation:8,
     marginVertical:30,
  },
  title1:{
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    },
    title2:{
      fontSize:18,
      paddingVertical:20,
      paddingHorizontal:20,
      textAlign:'center',
      color:'grey',
    },
      title3:{
        fontSize:20,
        paddingVertical:10,
        
        
        },
        title4:{
          fontSize:20,
          color:'white',
          
        },
        button: {
          alignItems: 'center',
          backgroundColor: '#0080ff',
          paddingVertical:10,
          borderRadius:10,
          
        },
 
})
export default CourseDetail;
