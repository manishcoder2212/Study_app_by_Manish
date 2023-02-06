import { StyleSheet, Text, View, TouchableOpacity,TouchableHighlight } from 'react-native';
import React, {Component} from 'react';
import Textbook from '../screens/Textbook';



export default class Boxes extends React.Component {
  TextBook = () => {
    this.props.navigation.navigate('Textbook');
  }
  NotePad = () => {
    this.props.navigation.navigate('Notepad');
  }
  Question = () => {
    this.props.navigation.navigate('Question');
  }
  StudyTips = () => {
    this.props.navigation.navigate('StudyTips');
  }
  Timer = () => {
    this.props.navigation.navigate('Timer');
  }
  render(){
    
    const { navigation } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text>Study App</Text>
        </View>

        
        <View style={styles.box}>
          <TouchableOpacity style={styles.inner}  onPress={this.TextBook} >
          <Text>Textbook</Text>
          </TouchableOpacity>
            
          
        </View>        
        

        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} onPress={this.Question}>
          <Text>Question Paper</Text>
          </TouchableOpacity>
            
          
        </View>


        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} onPress={this.Timer}>
           <Text>Timer</Text> 
           </TouchableOpacity>
        </View>


        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} onPress={this.NotePad}>
            <Text>NotePad</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} onPress={this.StudyTips}>
            <Text>Study Tips</Text>
            </TouchableOpacity>
        </View>


        <View style={styles.box}>
          <TouchableOpacity style={styles.inner} onPress={() => (alert("It is in progress "))}>
            <Text>Formulas</Text>
            </TouchableOpacity> 
        </View>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
   width:'100%',
   height:'85%',
   padding: 5,
   flexDirection: 'row',
   flexWrap:'wrap'
  },
  box:{
    width: '50%',
    height: '30%',
    padding: 5,
  },
  inner:{
    flex: 1,
    backgroundColor:'#eee',
    alignItems:'center',
    justifyContent: 'center',
  },
  header:{
    width:'100%',
    height:'15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee'
  }
});
