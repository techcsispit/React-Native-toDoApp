import { React, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  // using useStates from the function
  const[name,setName]=useState('Siddh Jain');
  const[age,setAge]=useState(18);
  const[person,setPerson]=useState([
    {name:'shaun', id:'1'},
    {name:'siddh', id:'2'},
    {name:'ninja', id:'3'},
    {name:'devil', id:'4'},
    {name:'mario', id:'5'},
    {name:'luigi', id:'6'},
    {name:'bowser', id:'7'},

  ])
  const pressHandler=(id)=>{
    console.log(id);
    setPerson((prevPerson)=>{
      return prevPerson.filter(person=>person.id!=id);
    });
  }
  // const [person,setPerson]=useState({name:'mario', age:40});
  // const clickHandler=()=>{
  //   setName((name==='What?')?'Who?':(name=='Who?')?'Chika-Chika-Slim-Shady!':'What?');
  //   setPerson({name:(person.name==='mario')?'luigi':'mario', age:(person.age===40)?36:40});
  // }
  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        keyExtractor={(item)=>item.id}
        data={person}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* useStates section */}
      {/* <ScrollView>
        { person.map(item=>(
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        )}
      </ScrollView> */}
      
      <Text>Enter Name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. Siddh Jain'
        onChangeText={(val)=>setName(val)}
      />
      <Text>Enter Age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 18'
        onChangeText={(val)=>setAge(val)}
      />
      <Text>Enter Hobbies:</Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder='Time Pass'
        // onChangeText={(val)=>setAge(val)}
      />
      {/* <Text>Name: {name}, Age: {age} </Text> */}
      {/* <Text>My Name Is {name} </Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>

      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}/>
      </View> */}
      
      {/* stylesheets and structure section */}
      {/* <View style={styles.header}>
        <Text style={styles.boldText}>Hello,World!</Text>
        
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem Ipsum Dolor Sit Amet</Text>
        <Text>Lorem Ipsum Dolor Sit Amet</Text>
        <Text>Lorem Ipsum Dolor Sit Amet</Text>

      </View>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,

    },
    item:{
      marginTop:24,
      padding:30,
      backgroundColor:'pink',
      fontSize:24,
      marginHorizontal:10,
    },
  // header:{
  //   backgroundColor:'pink',
  //   padding:20,
  // },
  // boldText:{
  //   fontWeight:'bold',
  //   // color:'green',
  // },
  // body:{
  //   backgroundColor:'yellow',
  //   padding:20,
  // }
  // buttonContainer:{
  //   marginTop:20,

  // }
  input:{
    borderWidth:1,
    color:'#777',
    padding:8,
    margin:10,
    width:200,
  }
});
