import React, {useState} from 'react';
import { TextInput, TouchableOpacity, View, ToastAndroid, Alert, StatusBar, Text, StyleSheet } from 'react-native';

export default function SignUp() {
    const [pressed, setPressed] = useState(false);

    const handleSubmit = () => {
        setPressed(!pressed);
        ToastAndroid.show("Login successful", ToastAndroid.LONG);
          // ToastAndroid.show();
    } 

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Create Accoount</Text>

            <View style={styles.detailView}>
                <Text style={styles.subText}>Email</Text>
                <TextInput placeholder='Email' placeholderTextColor={"gray"} style={styles.input} keyboardType="email-address"></TextInput>
            </View>

            <View style={styles.detailView}>
                <Text style={styles.subText}>Full name</Text>
                <TextInput placeholder='e.g. John Doe' placeholderTextColor={"gray"} style={styles.input} keyboardType="default"></TextInput>
            </View>
            
            <View style={styles.detailView}>
                <Text style={styles.subText}>Phone Number</Text>
                <TextInput placeholder='e.g. +123 456' placeholderTextColor={"gray"} style={styles.input} keyboardType="number-pad"></TextInput>
            </View>

            <View style={styles.detailView}>
                <Text style={styles.subText}>Password</Text>
                <TextInput placeholder='Password' placeholderTextColor={"gray"} style={styles.input} keyboardType="default" secureTextEntry></TextInput>
            </View>

            <View style={styles.detailView}>
                <Text style={styles.subText}>Confirm Password</Text>
                <TextInput placeholder='Password' placeholderTextColor={"gray"} style={styles.input} keyboardType="default" secureTextEntry></TextInput>
            </View>
            
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity="0.6" disabled={pressed}>
                    <Text style={{color: "white"}}>{!pressed ? "Create Account" : "Processing..."}</Text>
                </TouchableOpacity>
            </View>

            {/* <StatusBar barStyle="dark-content"/> */}
            {/* status = "auto" */}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      width: "100%",
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 20
    },
  
    mainText: {
      fontWeight: "800",
      fontSize: "30px"
    },
  
    detailView: {
      width: "100%",
      marginVertical: "10px"
    },
  
    subText: {
      fontWeight: "500",
      display: "flex",
      justifyContent: "flex-start"
    },
  
    button: {
      width: "100%",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      color: "white",
      fontWeight: "bold",
      backgroundColor: "#212121",
      cursor: "pointer"
    },

    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        width: "100%",
        marginTop: 20
    },
  
    input: {
      borderWidth: "1px",
      borderRadius: "5px",
      width: "100%",
      height: "50px",
      paddingHorizontal: 10,
      marginVertical: "10px"
    }
});