//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';


// create a component
const TodoItem = ({item,pressHandler}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemtext}>{item.text}</Text>
        <TouchableOpacity  onPress={()=>pressHandler(item.key)}>
          <AntDesign name='delete' size={30}/>
        </TouchableOpacity>
      </View>
   
    );
};

// define your styles
const styles = StyleSheet.create({
    item:{
      flexDirection:'row',
      justifyContent:'space-between',
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:15
    },
    itemtext:{
        textAlign:'left',
        fontSize:25,
        color:'#2c3e50',
    }
});


export default TodoItem;
