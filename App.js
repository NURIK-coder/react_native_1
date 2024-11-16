import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');

  const handleBuyButtonPress = () => {
    setMessage('Товар добавлен в корзину!');
    setTimeout(() => {
      setMessage('');
    }, 2000)
  };
  return (
    <>
    <View style={styles.container}>
      {/* <Image source={{uri: "https://avatars.mds.yandex.net/i?id=5751d8c36523366df8ba781762fb08b3_l-5339386-images-thumbs&n=13"}} style={{position:'absolute', top:30, width:400, height:200}}/>
      <Text>Lesson 2  {value}</Text>
      <StatusBar style="auto" />
      <TextInput 
      placeholder='Ваше имя' 
      keyboardType='text' value={value} onChangeText={(text)=>{setValue(text)}}/>
      <View style={{ width:100, borderRadius:30}}> 
        <Button  title='Submit' onPress={buttonPress}/>
      </View>
      <ScrollView style={{marginTop:30, maxHeight:30,width:200, shadowColor: 'black',
  shadowOpacity: 0.26,
  shadowOffset: { width: 0, height: 2},
  shadowRadius: 10,
  elevation: 3,
  backgroundColor: 'white'}} horizontal={true} >
        {[...Array(20).keys()].map((i)=>(
          <Text style={{fontSize:12}}>Element №{i+1}  </Text>
        ))}
      </ScrollView> */}

      <View style={{flex:1, justifyContent:'space-between', padding: 20, borderWidth:2, position:"absolute", top:0, width:400}}>
      {message ? (
          <Text style={styles.messageText}>{message}</Text>
      ) : null}
        <Image source={require('./assets/olx.webp')} style={{width:100, height:50, margin: 'auto'}}/>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.cardDetail}>
          <Image source={{uri: 'https://frankfurt.apollo.olxcdn.com/v1/files/x4sx7s5h5vm51-UZ/image;s=1000x700'}} 
        style={{width:300, height:150, margin:'auto', borderRadius:10}}/>
        <Text style={{textAlign:'center'}}>ЖК Parisien ! Сдаётся квартира в элит комплексе!</Text>
        <Text style={{textAlign: 'center'}}>Описание:
          Элитный апартамент
          Район: Яккасарай
          3/6/9
          Тип строения: кирпичный
          Авторский проект
          Общая площадь: 110м2
          Санузел:2
          Охраняемая, зелёная зона
          Парковочное место    
          Детская площадка</Text>
          <Text style={{textAlign:'center', color:'#09b33e'}}>12 300 000 сум</Text>
          <TouchableOpacity onPress={handleBuyButtonPress}>
            <Text style={styles.buyButton}>Купить</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardDetail}>
          <Image source={{uri: 'https://frankfurt.apollo.olxcdn.com/v1/files/3tsldlz7vsaw1-UZ/image;s=1000x700'}} 
        style={{width:300, height:150, margin:'auto', borderRadius:10}}/>
        <Text style={{textAlign:'center'}}>Kabinali Elekrto muravey</Text>
        <Text style={{textAlign: 'center'}}>Xolati yangi. Boshqarish uchun xech qanday xujjat kerak emas</Text>
        <Text style={{textAlign:'center', color:'#09b33e'}}>21 183 855 сум</Text>
          <TouchableOpacity onPress={handleBuyButtonPress}>
            <Text style={styles.buyButton}>Купить</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardDetail}>
          <Image source={{uri: 'https://frankfurt.apollo.olxcdn.com/v1/files/b8719d0uow4l-UZ/image;s=1000x700'}} 
        style={{width:300, height:150, margin:'auto', borderRadius:10}}/>
        <Text style={{textAlign:'center'}}>Дед Мороз,Санта Клаус Продажа доставка бесплатная</Text>
        <Text style={{textAlign: 'center'}}>ОПИСАНИЕ: 
        Доставка бесплатная по Ташкенту,за пределами Ташкента договорная.
        Никуда ехать не надо!!!Мы привозим для Вас несколько размеров , начиная от 50</Text>
        <Text style={{textAlign:'center', color:'#09b33e'}}>500 000 сум</Text>
          <TouchableOpacity onPress={handleBuyButtonPress}>
            <Text style={styles.buyButton}>Купить</Text>
          </TouchableOpacity>
        </View>
             
      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent:"center"
  },
  scrollContainer:{
    maxHeight: 900,
    width: 400,
    textAlign: 'center',
    borderWidth: 2,
    marginTop:93,
    padding:10
  },
  cardDetail:{
    marginTop:10,
    margin:'auto',
    borderRadius: 3,
    
  },
  buyButton:{
    backgroundColor: '#4CAF50',
    color:'#fff',
    fontSize: 12,
    padding: 5,
    borderRadius: 5,
    width: 100,
    height: 30,
    textAlign: 'center',
    marginTop:10,
    margin:'auto',

  },
  messageText: { 
    backgroundColor: '#381980',
    color:'#fff',
    fontSize: 15,
    padding: 5,
    borderRadius: 5,
    width: 350,
    height: 40,
    textAlign: 'center',
    margin:'auto',
    position:'absolute',
    top:30,
    left:20,
    zIndex:1,
  },
});
