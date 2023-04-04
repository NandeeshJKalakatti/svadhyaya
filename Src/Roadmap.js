import { View, Text } from 'react-native'
import React from 'react'

const Roadmap = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=> navigation.navigate('Br')} style={styles.touch}  ></TouchableOpacity>
    </View>
  )
}

export default Roadmap