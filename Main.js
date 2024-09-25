import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList,TextInput,TouchableHighlight, Alert } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import {AntDesign} from '@expo/vector-icons'
import AddToDo from './components/AddToDo';

export default function ToDoApp(){
    const [todos,setTodos]=useState([])
    

    function submitHandler(tasktext){
       
        if(tasktext.length>3){
        setTodos((prevTodos)=>{
            return[
                {text:tasktext,key:Math.random().toString()},
                ...prevTodos
            ]
        })
    }else{
        Alert.alert('WRONG INPUT','Todos must be 3 characters long',[
            {text:'Understood',onPress:()=>console.log('Alert closed')}
        ])
    }
    }

    const pressHandler=(key)=>{
        return(
            setTodos((prevTodos)=>{
                return prevTodos.filter(todo=>todo.key!=key)
            })
        )
    }
    return (
        <View style={styles.container}>
            <Header/>
           <AddToDo submitHandler={submitHandler}/>
           <View style={styles.content}>
            <View style={styles.list}>
                <FlatList data={todos} 
                renderItem={({item})=>(
                    <TodoItem item={item} pressHandler={pressHandler}/>
                )}/>
            </View>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex: 1,
        // backgroundColor: '#2c3e50',
    },
    content:{
        padding:15
    },
    list:{
        marginTop:10,
        flexDirection:'column',
        paddingRight:0
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
    addButtonText:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'800',
        marginTop:5,
    },
    
});

