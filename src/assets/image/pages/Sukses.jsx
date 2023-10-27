import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Sukses = ({navigation}) => {
  return (
    <View>
     
      

      <View style={{}}>
        <Image
          style={{
            width: 140,
            height: 140,
            borderRadius: 6,
            marginTop: 60,
            alignSelf: 'center',
          }}
          source={require('../image3.png')}
        />
      </View>

      <View>
      <Text
          style={{
            marginTop: 60,
            marginLeft: 16,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 32,
            alignSelf:'center'
          }}>
         SUKSES
        </Text>

       </View>

      <View 
      style={{
          height: 52,
          backgroundColor: 'red',
          borderRadius: 6,
          marginBottom: 16,
          marginTop: 400,
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft:16,
          marginRight: 16,
          alignItems: 'center',
         justifyContent:'center'
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>

            
            <Text style={{
                color: 'white',
                fontWeight: 'bold',
                alignSelf:'center'
            }}>
                Kembali
            </Text>
            </TouchableOpacity>
        </View>
    </View>

  );
};

export default Sukses;
