import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import V from '../../img/V.png'
import {container, rec,logo, text,  btn,Lg} from '../../global/style'

const Cssem3 = ({navigation}) => {
  return (
    <View style={container}>
      <View style={rec}>
      < Image source={V} style={logo}/> 
      </View>
    <View style={{height:'1%'}}/>
      <ScrollView style={text}>
     
      <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}> Transform Calculus,Fourier Series And Numerical Techniques (18MAT31)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Transform Calculus,Fourier Series And Numerical Techniques (21MAT31)
                </Text>
            </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('C')}>
                <Text style={btn}>Data Sctructures and Applications(18CS32)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('cs32_21')}>
                <Text style={btn}>Data Sctructures and Applications(21CS32)
                </Text>
           </TouchableOpacity>        
            <TouchableOpacity  onPress={()=> navigation.navigate('cs33_18')}>
                <Text style={btn}>Analog and Digital Electronics(18CS33)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('cs33_21')}>
                <Text style={btn}>Analog and Digital Electronics(21CS33)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('cs34_18')}>
                <Text style={btn}>Computer Organization(18CS34)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate('cs34_21')}>
                <Text style={btn}>Computer Organization(21CS34)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> navigation.navigate()}>
                <Text style={btn}>Constitution of India,Professional Ethics And Cyber Law(18CPC39/49)
                </Text>
            </TouchableOpacity>   
            <TouchableOpacity  onPress={()=> navigation.navigate('Home')}>
                <Text style={btn}>Home
                </Text>
            </TouchableOpacity>   
            </ScrollView>
    </View>
  )
}

export default Cssem3

