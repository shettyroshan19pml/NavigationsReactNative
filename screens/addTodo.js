import React, { useState } from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";


export default function AddTodo({submitTodo}){

    const [todoTitle, setTodoTitle] = useState("")
    const setTodoTitlehandler = (val)=>{
        setTodoTitle(val);
    }
    return(
        <View>
            <TextInput
            value={todoTitle}
            placeholder="Add a Todo"
            onChangeText={setTodoTitlehandler}
            />
            <Button
            onPress={()=>submitTodo(todoTitle)}
            title="Add Todo"
            ></Button>
        </View>
    )

}

