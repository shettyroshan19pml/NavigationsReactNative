import React, { useState } from "react"
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import MatComIcon from "react-native-vector-icons/MaterialCommunityIcons"


export default function ListBody({toDos,remove,editTodo}){

  // const [iseditable, setIsEditable] = useState(false)

  const [selectedId, setSelectedId] = useState(null)


  const renderItems = (item) =>{

  }
    return(
    <View style={{flex:1}}>
    <FlatList
    selectedId={selectedId}
      style={styles.list}
        data={toDos}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({item})=>(
          <View style={{flex:1, flexDirection:"row", margin:20}}>
            {/* {iseditable ? */}
            <TextInput style={styles.text} value={item.task}
            onChangeText={(newtext)=>{
              // console.log(newtext,item.key);
              editTodo(newtext,item.key)
            }}
            // onBlur={()=>{setIsEditable(false)}}
            >
            </TextInput>
            {/* : */}
            {/* <Text style={styles.text} onPress={()=>{setIsEditable(true)}}>{item.task} 
            </Text> */}
          {/* } */}
              
                <TouchableOpacity onPress={()=> remove(item.key)}>
                 <MatComIcon size={20} style={styles.delIcon} name="delete"/>
                 </TouchableOpacity>
                 </View>
               
            
        )}
    ></FlatList>
    </View>

    )
}

const styles = StyleSheet.create({
    list:{
      backgroundColor:"orange",
      // padding:10,
      margin:20,
    },
    text:{
      color:"white",
      padding:10,
      // margin:20,
      backgroundColor:"blue",
      width:"60%"
    },
    textedit:{
      color:"blue",
      padding:10,
      // margin:20,
      backgroundColor:"white",
      width:"60%"
    },
    delIcon:{
      color:"black",
      paddingTop:10,
      paddingLeft:40,
  
    }
  
  })