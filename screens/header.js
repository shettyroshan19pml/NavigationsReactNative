import React from "react"
import { View , StyleSheet, Text} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Header(props){
return(
<View style={styles.header}>
<Text style={styles.headText}>{props.title}</Text>
</View>
);
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"yellow",
        padding:20,
        paddingLeft:40,
        margin:20,
        marginBottom:10
    },
    headText:{
        color:"darkmagenta",
        fontSize:20,
        fontWeight:"bold"
    }

})