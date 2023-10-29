import { FlatList, StyleSheet, Text, View ,Image,TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import Courses from '../api/Courses'
import { useNavigation } from '@react-navigation/native'

const Course = () => {
  const navig=useNavigation();
  const courseCard =({item})=>{
     return(
      <View style={styles.mainContainer}>
        <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
          style={styles.imageStyle}
           source={item.image}
           resizeMode='contain'
          />
        </View>
        <Text style={styles.titleStyle}>{item.title}</Text>
        <Text style={styles.titleStyle1}>{item.description}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navig.navigate("CourseDetail", { course: item })}>
        <Text 
        style={{
          color:'white',
        }}>For more Detail</Text>
      </TouchableOpacity>
       
        </View>
      </View>
     )
  }
  return (
 <FlatList
 keyExtractor={(item)=>item.id}
   data={Courses}
   renderItem={courseCard}
 />
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
  imageContainer:{
    paddingBottom:30,
   
  },
  imageStyle:{
    width:'100%',
    height:undefined,
    aspectRatio:1,
  },
  titleStyle:{
    fontSize:20,
    fontWeight:'bold',
    
    textAlign:'center',
    

  },
  titleStyle1:{
   fontSize:15,
   color:'grey',
   paddingVertical:25,
   textAlign:'center',
    

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0080ff',
    padding: 10,
    borderRadius:10,
    paddingVertical:15,
  },
});
export default Course;

