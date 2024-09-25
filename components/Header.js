import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const  Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Task</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
        height:80,
        paddingTop:30,
        backgroundColor:'magenta'
    },
    title:{
        textAlign:'center',
        fontSize:30,
        color:'#fff',
        fontWeight:'bold'
    }
});

//make this component available to the app
export default Header;
