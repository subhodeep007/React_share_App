/*Example to make a long URL short and share from React Native App*/
import React from 'react';
//Import React
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Share
} from 'react-native';
//Import all core components

const App: () => React$Node = () => {

  getDataUsingGet=() =>{
    //GET request to convert our long URL to short one
    fetch('https://tinyurl.com/api-create.php?url=https://aboutreact.com/questions-and-answers-for-interview-preparation/', {
        method: 'GET'
    })
    .then((response) => response.text())
    //Response to text
    .then((responseJson) => {
      //Printing the Response String
      console.log(responseJson);
      //responseJson is our short URL
      //Sharing the short URL with our message
      Share.share({
        message: "Hey, I found very important interview questions of React Native. You can also read it by clicking on the link " + responseJson,
      })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
    })
    //If response is not in text then in error
    .catch((error) => {
        //Error 
        alert("Error -> " + JSON.stringify(error));
        console.error(error);
    });
  }

  return (
      <SafeAreaView style={styles.body}>
        <View style={styles.MainContainer}>
          <TextInput
          underlineColorAndroid="transparent"
          placeholder="Enter Text to Share"
          style={styles.TextInputStyle}
          onChangeText={TextInputText => {
            this.setState({ inputValue: TextInputText });
          }}
          />
          </View>
          <View style={styles.content}>
             <Text style={{fontSize: 16,textAlign: 'center', marginBottom: 40}}>
              After shortning the URL{'\n'}https://tinyurl.com/y2u6p7al
            </Text>
            <Button title='Share Messgae with Short URL' onPress={this.getDataUsingGet}/>
          </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16
  }
});

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    padding: 40,
  },
  TextInputStyle: {
    borderWidth: 1,
    borderColor: '#009688',
    width: '100%',
    height: 40,
    textAlign: 'center',
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    width: '100%',
    backgroundColor: '#646464',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
export default App;