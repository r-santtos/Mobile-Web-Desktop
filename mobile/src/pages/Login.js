import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

function Login({navigation}) {
  function register() {
    navigation.navigate('Register');
  }
  function password() {
      navigation.navigate('Register');
  }
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.paragrafo}>If you have not yet registered, do so now.</Text>
            <TouchableOpacity onPress={register} style={styles.btn}>
                <Text style={styles.btnText}>sign up</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#868895"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#868895"
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.btnSubmit}>
                <Text style={styles.btnTextSubmit}>sign in</Text>
            </TouchableOpacity>

            <View style={styles.links}>
                <TouchableOpacity onPress={register}>
                    <Text style={styles.txtLinks}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={password}>
                    <Text style={styles.txtLinks}>Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#58af9c',
  },

  title: {
    color: '#fff',
    fontSize: 45,
  },

  paragrafo: {
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 20,
  },

  btn: {
      borderColor: '#fff',
      borderStyle: 'solid',
      borderWidth: 2,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 10,
  },

  btnText: {
    color: '#fff',
  },

  form: {
    width: '100%',
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },

  input: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
  },

  btnSubmit: {
     backgroundColor: '#58af9c',
     width: '100%',
    borderRadius: 5,
  },

  btnTextSubmit: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12,
  },

  links: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingTop: '3%',
      paddingBottom: '3%',
  },

  txtLinks: {
    color: '#868895',
  }
}); 
