import {View, Text, Image} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <View
        style={{
          height: 52,
          backgroundColor: 'red',
          marginHorizontal: 16,
          borderRadius: 99,
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 16,
        }}>
        <Image
          source={require('./src/assets/image/g.png')}
          style={{width: 140, height: 32, marginRight: 16}}
        />
        <Image
          source={require('./src/assets/image/menu.png')}
          style={{width: 24, height: 24, marginRight: 16}}
        />
      </View>

      {/* TULISAN */}
      <View>
        <Text
          style={{
            marginTop: 32,
            marginLeft: 16,
            fontSize: 15,
          }}>
          Selamat Datang di
        </Text>

        <Text
          style={{
            marginTop: 4,
            marginLeft: 16,
            fontWeight: 'bold',
            color: '000000',
            fontSize:32,
          }}>
          KANTIN MHS
        </Text>

        <Text
          style={{
            marginTop: 32,
            marginLeft: 16,
            fontWeight: 'bold',
            color: 'black',
            fontSize:15,
          }}>
          Menu Makanan
        </Text>
      </View>
      <View style={{
        justifyContent: 'space-evenly',
        flexDirection: 'row'
        
      }}>
         <Image
           source= {require ('./src/assets/image/buger.png')}
           style ={{
            marginLeft: 6,
            marginTop : 12,
           }}
         />

<Image
           source= {require ('./src/assets/image/buger.png')}
           style ={{
            marginRight: 6,
            marginTop : 12,
           }}
         />
      </View>
    </View>
  );
};

export default App;