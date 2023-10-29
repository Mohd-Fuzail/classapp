import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu';

const Home = (props) => {
    const description = '"Technology will not replace great teachers, but technology in the hands of great teachers can be transformational."';
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("../../assets/img1.png")}
                />
                <Text style={styles.text1}>Welcome To</Text>
                <Text style={styles.text2}>E-Learning Platform</Text>
                <Text style={styles.text3}>{description}.</Text>
                <View><Menu/></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        // flex:1,

        alignItems: "center",
        justifyContent: "center",

    },
    container: {
        // flex: 1,
        paddingTop: 50,

        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        paddingTop: 20,
        fontWeight: "bold",
        fontSize: 33,
        // color:'#21618C',

    },
    text2: {
        paddingVertical: 5,
        // fontWeight: "bold",
        fontSize: 40,
        color:"#4c5dab"
    },
    text3: {
        paddingVertical: 10,
        // fontWeight:"bold",
        marginLeft: 0,
        paddingHorizontal:15,
        fontSize: 15,
        
        
    },
    image: {
        height: 200,
        width: 340,
        borderRadius: 15,
    }
});

export default Home;

