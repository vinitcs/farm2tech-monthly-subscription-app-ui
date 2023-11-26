import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { productDisplayInfoData } from './ProductDisplayInfoContent';
import { fonts } from './../../../theme/fonts/fonts';
import { colors } from './../../../theme/colors/colors';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


const ProductDisplayPrice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.dairyDisplayContainerText}>Products</Text>

      <View style={styles.boxContainer}>
        {productDisplayInfoData.map((item, idx) => (
          <TouchableOpacity onPress={() => { navigation.navigate('Search') }}>
            <View style={styles.box} key={idx} >
              <View>
                <Image source={item.uri} style={styles.logo} />
              </View>
              <View
              // style={{backgroundColor:'pink'}}
              >
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.litreText}>{item.litre}/L</Text>
                <View style={{ flexDirection: 'row', gap: 6, marginTop: 6, }}>
                  <Text style={styles.priceText}>{'\u20B9'} {item.price}/L</Text>
                  <Text style={styles.priceStrikeThroughText}>{'\u20B9'} {item.price}/L</Text>
                  <Text style={styles.priceOffText}>{item.price}% off</Text>
                </View>
                <Text style={styles.priceSubscribeText}>Subscribe to save {item.price}Rs in per unit</Text>
              </View>
              <View style={{
                // backgroundColor:'yellow',
                // justifyContent: 'flex-start'
                position:'absolute',
                right:6,
                top:6,
              }}>
                <TouchableOpacity>
                  <Icon
                    name='calendar'
                    type='ionicon'
                    size={28}
                    color={colors.lightText}
                    onPress={() => { navigation.navigate('Cart') }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View >
    </View>
  )
}

export default ProductDisplayPrice;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'purple',
    flex: 1,
    height: 'auto',
  },

  dairyDisplayContainerText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    fontFamily: fonts.Bold,
  },

  boxContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: 'auto',
    padding: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    rowGap:16,
    marginTop:10,
  },

  box: {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.outline,
    justifyContent: 'flex-start',
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    gap: 10,
  },

  logo: {
    // backgroundColor: 'yellow',
    resizeMode: 'contain',
    width: 90,
    height: 90,


  },
  text: {
    // backgroundColor:'blue',
    fontSize: 16,
    color: colors.text,
    fontFamily: fonts.Semibold,

  },

  litreText: {
    // backgroundColor:'violet',
    fontSize: 14,
    color: colors.lightText,
    fontFamily: fonts.Medium,
  },

  priceText: {
    // backgroundColor:'magenta',
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.Semibold,
  },

  priceStrikeThroughText: {
    // backgroundColor:'magenta',
    fontSize: 14,
    color: colors.lightText,
    fontFamily: fonts.Semibold,
    textDecorationLine: 'line-through'
  },

  priceOffText: {
    // backgroundColor:'magenta',
    fontSize: 14,
    color: colors.primary,
    fontFamily: fonts.Semibold,
  },

  priceSubscribeText: {
    // backgroundColor:'magenta',
    fontSize: 12,
    color: colors.primary,
    fontFamily: fonts.Semibold,
  },
})