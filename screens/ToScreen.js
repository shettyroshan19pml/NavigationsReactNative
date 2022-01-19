import React, { useState } from "react"
import {StyleSheet, View,Alert,TouchableWithoutFeedback, Keyboard, Button} from "react-native"
import Header from "./header"
import ListBody from "./listBody"
import AddTodo from"./addTodo"

export default function ToDoScreen(props){


  const [toDoList,setToDoList] = useState([
  ]);

  const removeItem = (id) => {
    setToDoList(toDoList.filter(todo => todo.key !== id))
  }

  const editTodo = (text, id) => {
   
    const newArray = [...toDoList]

    console.log(newArray.find(a=>a.key === id).task,id,text)

    newArray.find(a=>a.key === id).task = text

    setToDoList(newArray)

  }

 const submitTodo = (todo)=>{
  if(todo.length>3){
    setToDoList([...toDoList,{task:todo, key:
      (Array.isArray(toDoList) && toDoList.length !== 0) ?
      parseInt(toDoList.slice(-1).map(a=>a.key)) + 1 : 0}]) 
    console.log(toDoList);
  }
  else{
    Alert.alert('OOps!','Todos must be more than 3 chars long',[{text:"Ok", onPress:()=> console.log('alert closed')}])
  }
 }

  return(
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      {/* <Sandbox/> */}
      <View>
      <Header title="To do List"/>
      <Button title="go to first screen" onPress={()=> props.navigation.popToTop()}/>

      <AddTodo submitTodo={submitTodo}/>
      </View>
      <ListBody toDos={toDoList} remove={removeItem} editTodo = {editTodo}/>
    </View>
    </TouchableWithoutFeedback>

  )

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  list:{
    backgroundColor:"orange",
    margin:20,
  },
  text:{
    color:"white",
    padding:10,
    margin:20,
    backgroundColor:"blue",
  }

})