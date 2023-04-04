import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './homepage';
import Branch from './Branch';
import Roadmap from './Roadmap';
import CsdSem from '../Sem/CsdSem';
import CVsem from '../Sem/CVsem';
import Ecsem from '../Sem/Ecsem';
import EeSem from '../Sem/Eesem';
import Cssem from '../Sem/Cssem';
import Mechsem from '../Sem/Mechsem';

import Ysem1 from '../Sub/sem1sub/Sem1';
import Ysem2 from '../Sub/sem1sub/Sem2';



import Cssem5 from '../Sub/Cssub/Sem5';
import Cssem6 from '../Sub/Cssub/Sem6';
import Cssem7 from '../Sub/Cssub/Sem7';
import Cssem8 from '../Sub/Cssub/Sem8';
import Cssem3 from '../Sub/Cssub/Sem3';
import Cssem4 from '../Sub/Cssub/Sem4';

import Cvsem3 from '../Sub/CVsub/Sem3'
import Cvsem4 from '../Sub/CVsub/Sem4'
import Cvsem5 from '../Sub/CVsub/Sem5'
import Cvsem6 from '../Sub/CVsub/Sem6'
import Cvsem7 from '../Sub/CVsub/Sem7'
import Cvsem8 from '../Sub/CVsub/Sem8'


import Ecsem3 from '../Sub/Ecsub/Sem3'
import ECsem4 from '../Sub/Ecsub/Sem4'
import Ecsem5 from '../Sub/Ecsub/Sem5'
import Ecsem6 from '../Sub/Ecsub/Sem6'
import Ecsem7 from '../Sub/Ecsub/Sem7'
import Ecsem8 from '../Sub/Ecsub/Sem8'

import Eesem3 from '../Sub/Eesub/Sem3'
import Eesem4 from '../Sub/Eesub/Sem4'
import Enj from '../Sub/Eesub/Sem5'
import Eesem6 from '../Sub/Eesub/Sem6'
import Eesem7 from '../Sub/Eesub/Sem7'
import Eesem8 from '../Sub/Eesub/Sem8'

import Mesem3 from '../Sub/Mesub/Sem3'
import Mesem4 from '../Sub/Mesub/Sem4'
import Mesem5 from '../Sub/Mesub/Sem5'
import Mesem6 from '../Sub/Mesub/Sem6'
import Mesem7 from '../Sub/Mesub/Sem7'
import Mesem8 from '../Sub/Mesub/Sem8'

import DS from '../Module/CSE/CS32_18'
import CS32_21 from '../Module/CSE/CS32_21'
import CS33_18 from '../Module/CSE/CS33_18'
import CS33_21 from '../Module/CSE/CS33_21'
import CS34_18 from '../Module/CSE/CS34_18'
import CS34_21 from '../Module/CSE/CS34_21'


const Stack = createNativeStackNavigator();
const Authnav = () => {
  return (
    <Stack.Navigator initialRouteName='Homepage'>
    <Stack.Screen name="Home" component={Homepage} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Br" component={Branch} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="csdsem" component={CsdSem} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cvsem" component={CVsem} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="ecsem" component={Ecsem} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="eesem" component={EeSem} 
      options={{
        headerShown: false,
      }} />
       <Stack.Screen name="cssem" component={Cssem} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Mesem" component={Mechsem} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Ysem1" component={Ysem1} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Ysem2" component={Ysem2} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cssem3" component={Cssem3} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cssem4" component={Cssem4} 
      options={{
        headerShown: false,
      }} /><Stack.Screen name="cssem5" component={Cssem5} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cssem6" component={Cssem6} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cssem7" component={Cssem7} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cssem8" component={Cssem8} 
      options={{
        headerShown: false,
      }} />
       <Stack.Screen name="CVsem3" component={Cvsem3} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="CVsem4" component={Cvsem4} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="CVsem5" component={Cvsem5} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="CVsem6" component={Cvsem6} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="CVsem7" component={Cvsem7} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="CVsem8" component={Cvsem8} 
      options={{
        headerShown: false,
      }} />


      <Stack.Screen name="Ecsem3" component={Ecsem3} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="ECsem4" component={ECsem4 } 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Ecsem5" component={Ecsem5} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Ecsem6" component={Ecsem6} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Ecsem7" component={Ecsem7} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Ecsem8" component={Ecsem8} 
      options={{
        headerShown: false,
      }} />



<Stack.Screen name="Eesem3" component={Eesem3} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Eesem4" component={Eesem4} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Esem5" component={Enj} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Eesem6" component={Eesem6} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Eesem7" component={Eesem7} 
      options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Eesem8" component={Eesem8} 
      options={{
        headerShown: false,
      }} />
       
       <Stack.Screen name="Mesem3" component={Mesem3} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Mesem4" component={Mesem4} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Mesem5" component={Mesem5} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Mesem6" component={Mesem6} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Mesem7" component={Mesem7} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Mesem8" component={Mesem8} 
      options={{
        headerShown: false,
      }} />

<Stack.Screen name="C" component={DS} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cs32_21" component={CS32_21} 
      options={{
        headerShown: false,
      }} />
    <Stack.Screen name="cs33_18" component={CS33_18} 
      options={{
        headerShown: false,
      }} />
    <Stack.Screen name="cs33_21" component={CS33_21} 
      options={{
        headerShown: false,
      }} />
      <Stack.Screen name="cs34_18" component={CS34_18} 
      options={{
        headerShown: false,
      }} />
    <Stack.Screen name="cs34_21" component={CS34_21} 
      options={{
        headerShown: false,
      }} />


      </Stack.Navigator>
  )
}

export default Authnav