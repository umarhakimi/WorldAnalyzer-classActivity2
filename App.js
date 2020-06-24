import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {

      word: "",
      vowel: 0,
      consonant: 0,
      calculate: 0


    }
  }


  calculation = () => {
    let vowel = 0;
    let consonant = 0;
    let word = this.state.word;

    for(let i = 0 ; i < word.length ; ++i){
      if ( word[i]=='a' || word[i]=='e' || word[i]=='i' || word[i]=='o' || word[i]=='o')
      {
        v++;
      }
      else
      {
        c++;
      }
      this.setState({vowel:v})
      this.setState({consonant:c});
    }

  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>Word Analyser</Text>
        </View>
        <View style={Styles.container}>
        <TextInput onChangeText={(word) => this.setState({word})} style={Styles.instructions} placeholder='Write Something Here'/>
        <Text></Text>
        <Text></Text>
        </View>
        <View style={Styles.container}>
        <Button color="#40E0D0" onPress={this.calculation} title='Analyse'/>
        <Text></Text>
        <Text style={Styles.instructions}>Total Word : {this.state.word.length}</Text>
        <Text style={Styles.instructions}>Consonant: {this.state.consonant}</Text>
        <Text style={Styles.instructions}>Vowel: {this.state.vowel}</Text>
        </View>
      </View>
    );
  }
}
