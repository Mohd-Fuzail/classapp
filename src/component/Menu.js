import { View, Text, TouchableOpacity ,StyleSheet,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigator=useNavigation();

return (
   
        <View style={styles.container}>
          
             <TouchableOpacity
      
      onPress={()=> navigator.navigate("Course")}
      >
        <Image
                    style={styles.icon}
                    source={require("../../assets/course.png")}
                />
                <Text>Course</Text>
      </TouchableOpacity> 
    <TouchableOpacity
      onPress={()=> navigator.navigate("Detail")}
       >
         <Image
                     style={styles.icon}
                     source={require("../../assets/detail.png")}
                 />
                 <Text>Detail</Text>
       </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigator.navigate("About")}
      >
        <Image
                    style={styles.icon}
                    source={require("../../assets/about.png")}
                />
                <Text>About</Text>
        
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigator.navigate("Contact")}
      >
        <Image
                    style={styles.icon}
                    source={require("../../assets/contact.png")}
                />
                <Text>Contact</Text>
      </TouchableOpacity>
          
        </View>
    
);
}

const styles = StyleSheet.create({
     container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent:'space-evenly',
    width:'100%',
    marginTop:160, 
  },
  text: {
    fontSize: 16,
    marginRight: 8, 
  },
  icon: {
    
    height:40,
    width:50,
    aspectRatio:1,
  
  },
 });

export default Menu;