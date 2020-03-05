import React from 'react';
import { StyleSheet,Alert, Text,View, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.12,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.2,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }
  buttonPressed = currency =>{
    if(this.state.inputValue===""){
      Alert.alert("Enter some value");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency]
    this.setState({resultValue:result.toFixed(2)});
  };

  render(){
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.screenView}>
            <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>
                {this.state.resultValue}
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                selectionColor = "#FFF"
                keyboardType="numeric"
                placeholder ="Enter value"
                value={this.state.inputValue}
                onChangeText = { inputValue => this.setState({
                  inputValue
                })}
              />
            </View>
            <View style={styles.converterButtonContainer}>
                <TouchableOpacity 
                onPress={ () => this.buttonPressed("DOLLAR")}
                style={styles.converterButton}>
                  <Text style={styles.converterButtonText}>$</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={ () => this.buttonPressed("EURO")}
                style={styles.converterButton}>
                  <Text style={styles.converterButtonText}>Euro</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={ () => this.buttonPressed("POUND")}
                style={styles.converterButton}>
                  <Text style={styles.converterButtonText}>Pound</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={ () => this.buttonPressed("AUSDOLLAR")}
                style={styles.converterButton}>
                  <Text style={styles.converterButtonText}>Aus</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={ () => this.buttonPressed("CANDOLLAR")}
                style={styles.converterButton}>
                  <Text style={styles.converterButtonText}>Canada</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={ () => this.buttonPressed("YEN")}
                style={styles.converterButton}>
                  <Text style={styles.converterButtonText}>YEN</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={ () => this.buttonPressed("DINAR")}
                style={styles.converterButton}>
                  <Text style={styles.converterButtonText}>Dinar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={ () => this.buttonPressed("BITCOIN")}
                style={styles.converterButton}>
                  <Text style={styles.converterButtonText}>Bitty</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={ () => this.buttonPressed("RUBEL")}
                style={styles.converterButton}>
                  <Text style={styles.converterButtonText}>Rubel</Text>
                </TouchableOpacity>
            </View>





          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  screenView: {
    flex: 1,

  },
  resultContainer:{
    height: 70,
    marginTop: 45,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 2,

  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color:"#FFF"
  },
  inputContainer:{
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#0A79DE",
    alignItems: "center",
  },
  input:{
    color: "#FFF",
    fontSize: 30,

  },
  converterButtonContainer:{
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2,
  },
  converterButton:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%"
  },
  converterButtonText:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF"
  }
  
});
