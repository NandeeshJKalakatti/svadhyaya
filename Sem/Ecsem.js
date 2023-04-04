import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../img/V.png'
// import Log3 from'./img/Logo3.png'
import {container, rec,logo, text,  btn,Lg} from '../global/style'

const Ecsem= ({navigation}) => {
  return (
    <View style={container}>
      <View style={rec}>
      < Image source={V} style={logo}/> 
      </View>
    
    <View style={{height:'1%'}}/>
      <ScrollView style={text}>
      <TouchableOpacity  onPress={()=> navigation.navigate('Home')}>
                <Text style={btn}>Home
                </Text>
            </TouchableOpacity>
        
            
            <TouchableOpacity  onPress={()=> navigation.navigate('Ecsem3')}>
                <Text style={btn}>3 Sem
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('ECsem4')}>
                <Text style={btn}>4 Sem
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('Ecsem5')}>
                <Text style={btn}>5 Sem
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('Ecsem6')}>
                <Text style={btn}>6 Sem
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('Ecsem7')}>
                <Text style={btn}>7 Sem
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('Ecsem8')}>
                <Text style={btn}>8 Sem
                </Text>
            </TouchableOpacity>
            {/* <View style={{height:'1%'}}/>
            <View style={{height:'1%'}}/>
            <View style={{height:'1%'}}/> */}
            </ScrollView>
            {/* <View style={{height:'%'}}/> */}
    </View>
  )
}

export default Ecsem

