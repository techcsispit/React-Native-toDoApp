import { React, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function AddToDo({updateTodos}){
    const [text,setText]=useState('');

    const textHandler=(val)=>{
        setText(val);
    }
    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder='add task...'
                onChangeText={textHandler}
            />
            <Button onPress={()=>updateTodos(text)} title='Add To-Do' color='teal' />
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#777',
    },
})
