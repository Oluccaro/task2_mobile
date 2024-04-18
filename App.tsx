/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

type ActionButtonProps = PropsWithChildren<{
  text: String,
}>;

function actionButton(): React.JSX.Element{
  
  return(<></>)
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);
  const [myNumber, setNumber] = useState('1');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Escolha um número a somar ou subtrair:</Text>
      <TextInput 
        style={styles.inputNumber}
        placeholder='Numero' 
        keyboardType='numeric'
        onChangeText={(value)=>setNumber(value)} 
        value={myNumber}/>
      <TouchableOpacity 
        style={styles.button}
        onPress={()=>setCount(count+parseFloat(myNumber))}>
        <Text
          style={styles.buttonText}>
          + {myNumber}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={()=>setCount(count-parseFloat(myNumber))}>
        <Text style={styles.buttonText}>
          - {myNumber}
        </Text>
      </TouchableOpacity>
      <Text style={styles.label}>Total = {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputNumber:{
    height: 40,
    width: '50%',
    borderColor: 'gray',
    borderWidth: 2,
    textAlign: 'center'
  },
  button:{
    backgroundColor: '#8a2be2',
    marginTop: 10,
    width:100
  },
  buttonText:{
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontSize:20
  },
  label:{
    fontSize: 20, 
    padding: 10
  }

});

export default App;
