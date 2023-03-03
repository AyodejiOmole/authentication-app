import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View, ToastAndroid, Alert, StatusBar, Text, StyleSheet } from 'react-native';
// "expo": "^1.0.0"

export default function Login () {
    const [pressed, setPressed] = useState(false);

    const handleSubmit = () => {
      setPressed(!pressed);
      ToastAndroid.show("Login successful", ToastAndroid.LONG);
        // ToastAndroid.show();
    } 

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Login</Text>

            <View style={styles.detailView}>
                <Text style={styles.subText}>Username</Text>
                <TextInput placeholder='Username' style={styles.input} keyboardType="default" ></TextInput>
            </View>
            
            <View style={styles.detailView}>
                <Text style={styles.subText}>Password</Text>
                <TextInput placeholder='Password' style={styles.input} keyboardType="default" secureTextEntry></TextInput>
            </View>
            
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity="0.6" disabled={pressed}>
                    <Text style={{color: "white"}}>{!pressed ? "Login" : "Processing..."}</Text>
                </TouchableOpacity>
            </View>

            <StatusBar barStyle="dark-content"/>
            {/* status = "auto" */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      width: "100%",
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingHorizontal: "20px",
      paddingVertical: "20px",
    },
  
    mainText: {
      fontWeight: "800",
      fontSize: "30px"
    },
  
    detailView: {
      width: "100%",
      marginVertical: "15px"
    },
  
    subText: {
      fontWeight: "300",
      opacity: "0.7",
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
        width: "100%"
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