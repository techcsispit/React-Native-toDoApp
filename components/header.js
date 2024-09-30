import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return( <View style={styles.head}>
        <Text style={styles.headText}>My To-Dos</Text>
    </View>)
}

const styles=StyleSheet.create({
    head:{
        height:80,
        paddingTop:38,
        backgroundColor:'#FFFDD0',
    },
    headText:{
        textAlign:'center',
        color:'teal',
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'monospace',
    },
})
