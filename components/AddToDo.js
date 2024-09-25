//import liraries
import React, { useState} from 'react';
import { View, Text, StyleSheet ,TextInput,TouchableHighlight} from 'react-native';
import {AntDesign} from '@expo/vector-icons'

// create a component
const AddToDo = ({submitHandler}) => {
    const [tasktext,setTaskText]=useState('')

    const changeHandler=(val)=>{
        setTaskText(val)
    }
    return (
        <View style={{flexDirection:'row',marginBottom:10}}>
           <TextInput style={styles.input} placeholder='Add task' 
             onChangeText={changeHandler}/>

            <TouchableHighlight style={styles.addButton} onPress={()=>submitHandler(tasktext)}>
                <Text style={styles.addButtonText}>
                <AntDesign name='plus' size={45} />
                </Text>
            </TouchableHighlight>
           </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    input:{
        height:60,
        width:'75%',
        borderColor:'blue',
        borderRadius:15,
        borderWidth:2,
        marginLeft:10,
        marginRight:1,
        marginTop:10,
        padding:10,
        fontSize:20
    },
    addButton:{
        height:60,
        width:'20%',
        backgroundColor:'blue',
        borderRadius:10,
        padding:2,
        marginTop:10,
        marginLeft:5
    },
    addButtonText:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'800',
        marginTop:5,
    },
});

//make this component available to the app
export default AddToDo;
