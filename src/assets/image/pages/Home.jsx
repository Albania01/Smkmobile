import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
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
          source={require('../g.png')}
          style={{width: 140, height: 32, marginRight: 16}}
        />
        <Image
          source={require('../menu.png')}
          style={{width: 24, height: 24, marginRight: 16}}
        />
      </View>

      {/* TULISAN ATAS */}
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
            color: 'black',
            fontSize: 32,
          }}>
          KANTIN MULTISTUDI
        </Text>

        <Text
          style={{
            marginTop: 32,
            marginLeft: 16,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 15,
          }}>
          Menu Makanan
        </Text>
      </View>
      {/* GAMBA BUGE */}
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Image
            source={require('../buger.png')}
            style={{
              marginLeft: 6,
              marginTop: 12,
              width: 158,
              height: 140,
            }}
          />
        </TouchableOpacity>

        <Image
          source={require('../buger.png')}
          style={{
            marginRight: 6,
            marginTop: 12,
            width: 158,
            height: 140,
          }}
        />
      </View>

      <Text
        style={{
          marginTop: 106,
          marginLeft: 16,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 15,
        }}>
        Menu Minuman
      </Text>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../buger.png')}
          style={{
            marginLeft: 6,
            marginTop: 12,
            width: 158,
            height: 140,
          }}
        />

        <Image
          source={require('../buger.png')}
          style={{
            marginRight: 6,
            marginTop: 12,
            width: 158,
            height: 140,
          }}
        />
      </View>
    </View>
  );
};

export default Home;
