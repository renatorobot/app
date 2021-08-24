import React from 'react';
import {View} from 'react-native';


export default function comp1 (props){

    return (
        
        <View style={{width: '100%', height: 300, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
            <View style={{flexGrow:1, backgroundColor: '#00f'}}></View>
            <View style={{flexGrow:1, height: 50, backgroundColor: '#00a'}}></View>
            <View style={{flexGrow:1, height: 50, backgroundColor: '#005'}}></View>
            <View style={{flexGrow:1, height: 50, backgroundColor: '#f00'}}></View>
            <View style={{flexGrow:1, height: 50, backgroundColor: '#a00'}}></View>
            <View style={{flexGrow:1, height: 50, backgroundColor: '#500'}}></View>
        </View>
        
    )

        

}