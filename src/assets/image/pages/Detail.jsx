import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Detail = ({navigation}) => {
  return (
    <View>
      <View style={{display: 'flex', flexDirection: 'row',  alignItems: 'center', marginTop: 16,}}>
        <View
          style={{
            height: 40,
            backgroundColor: 'red',
            marginLeft: 16,
            borderRadius: 99,
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 40,
            flexDirection: 'row',
            paddingLeft: 10,
          }}>
          <Image
            style={{
              width: 24,
              height: 24,
              alignItems: 'center',
            }}
            source={require('../Frame.png')}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
              fontWeight: 'bold',
              marginLeft: 16,

            }}>
            kembali
          </Text>
        </View>
      </View>

      <View style={{}}>
        <Image
          style={{
            width: 388,
            height: 300,
            borderRadius: 6,
            marginTop: 32,
            alignSelf: 'center',
          }}
          source={require('../unsplash_-GFCYhoRe48.png')}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 12,
        }}>
        <Text
          style={{
            marginLeft: 16,
            color: 'black',
          }}>
          Burger Keju
        </Text>
        <Text
          style={{
            marginRight: 16,
            color: 'red',
          }}>
          Rp.15.000
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 2,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            marginTop: 12,
            fontSize: 10,
            marginLeft: 16,
            marginBottom: 16,
          }}>
          Burger Keju dengan toping berbagai daging dan sayuran dengan harga
          yang terjangkau
        </Text>
      </View>

      <View style={{}}>
        <Text style={{
            color:'black',
            marginLeft: 16,
            marginTop: 20,
            fontSize:12
        }}>
            Massukan Jumlah Pesanan</Text>
      </View>
       <View>
           <TextInput placeholder='masukan jumlah pesanan' style={{
            borderWidth: 1,
            marginTop: 16,
            marginLeft: 16,
            marginRight:16,
            color:'black',
            borderColor:'gray'
           }}> 

           </TextInput>
       </View>

      <View 
      style={{
          height: 52,
          backgroundColor: 'red',
          borderRadius: 6,
          marginBottom: 16,
          marginTop: 120,
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft:16,
          marginRight: 16,
          alignItems: 'center',
         justifyContent:'center'
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('Sukses')}>

            
            <Text style={{
                color: 'white',
                fontWeight: 'bold',
                alignSelf:'center'
            }}>
                SUKSES
            </Text>
            </TouchableOpacity>
        </View>
    </View>

  );
};

export default Detail;
