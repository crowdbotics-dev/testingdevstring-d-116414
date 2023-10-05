import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native";

const SignUpScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.logo} />
        <Text style={styles.logoText}>My App</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput placeholder="Full Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
        <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signIn}>
          <Text style={styles.signInText}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center"
  },
  logoContainer: {
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  formContainer: {
    marginTop: 50
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  signIn: {
    alignItems: "center",
    marginTop: 20
  },
  signInText: {
    color: "#007AFF",
    fontSize: 16
  }
});
export default SignUpScreen;