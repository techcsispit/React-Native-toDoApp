import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ToDos({item, pressHandler}){
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color={'#333'}/>
            <Text style={styles.text}>{item.text}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    item:{
        padding:16,
        margin:16,
        color:'teal',
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        backgroundColor:'#FFFDD0',
        borderRadius:10,
        elevation:10,
        flexDirection:'row',
    },
    text:{
        marginLeft:10,
    },
})
