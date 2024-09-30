import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AddToDo from './components/addToDo';
import Header from './components/header';
import ToDos from './components/todoitems';

export default function App(){
    const [todos,setTodos]=useState([
        {text:'create a website', key:'1'},
        {text:'create an app', key:'2'},
        {text:'survive college', key:'3'}
    ])
    const pressHandler=(key)=>{
        setTodos((prevTodos)=>{
            return prevTodos.filter(item=>item.key!=key);
        })
    }
    const updateTodos=(text)=>{
        if(text.length>3){
            setTodos((prevTodos)=>{
                return [
                    {text:text, key:Math.random().toString()},
                    ...prevTodos
                ]
            })
        }else{
            Alert.alert('OOPS!', 'Todos must be over 3 chars long',[
                {text:'Understood',onPress:()=>console.log('alert closed')}
            ])
        } 
    }
    return(
        // <Sandbox />
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
            console.log('dismissed keyboard');
            }}>
        <View style={styles.container}>
            {/* header */}
            <Header />
            <View style={styles.content}>
                {/* form */}
                <AddToDo updateTodos={updateTodos}/>
                <View style={styles.list}>
                <FlatList 
                    data={todos}
                    renderItem={({item})=>(
                        <ToDos item={item} pressHandler={pressHandler}/>
                    )}
                    />
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    content:{
        padding:40,
        // backgroundColor:'#FF6F61',
        backgroundColor:'pink',
        flex:1,
    },
    list:{
        marginTop:40,
        backgroundColor:'#87CEFA',
        // backgroundColor:'pink',
        borderRadius:20,
        flex:1,
    },
})