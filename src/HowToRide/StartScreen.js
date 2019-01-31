
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import { Header } from 'react-native-elements';
import Swiper from 'react-native-swiper';
export default class StartScreen extends Component<Props> {

  headerHandler(){
    return(
      <Header
      containerStyle={{
        backgroundColor: 'transparent',
        justifyContent: 'space-around',
        marginTop:-30,
        elevation: 0
      }}
      centerComponent={{ text: 'MY TITLE', style: { color: 'black', fontSize:20, fontWeight:'bold' } }}
      rightComponent={{ text: '나중에 하기', style: { color: 'black', fontSize:20, fontWeight:'bold', marginLeft:-50  } }}
      />
    )
  }

  buttonButtonHandler(){
    return(
      <View style={{height:80, width:'100%', backgroundColor: '#607D8B',justifyContent: 'center',alignItems: 'center'}}>
          <TouchableOpacity>
             <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}> 나중에 보기 </Text>
          </TouchableOpacity>
      </View>
    )
  }

  startScreen(){
    return(
      <View style={styles.slide}>
       <View style={{flex:2, backgroundColor:'blue',justifyContent: 'center', alignItems: 'center'}}>
         <View style={{justifyContent: 'center', alignItems: 'center', width:300, height:300, backgroundColor:'yellow', padding:40, borderRadius:150}}>
         </View>
       </View>
       <View style={{flex:1, backgroundColor:'red',justifyContent: 'flex-start', alignItems: 'center'}}>
         <View>
          <Text style={styles.text}>가까운 디바이스를 찾은 후{"\n"} QR코드를 스캔해주세요</Text>
         </View>
       </View>
      </View>
    )
  }

  howToRideScreen(){
    return(
      <View style={styles.slide}>
       <View style={{flex:2, backgroundColor:'blue',justifyContent: 'center', alignItems: 'center'}}>
         <View style={{justifyContent: 'center', alignItems: 'center', width:300, height:300, backgroundColor:'yellow', padding:40, borderRadius:150}}>
         </View>
       </View>
       <View style={{flex:1, backgroundColor:'red',justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text style={styles.text}>   발로 땅을 3번 찬 후{"\n"}가속페달을 눌러주세요</Text>
       </View>
      </View>
    )
  }

  whereToRideScreen(){
    return(
      <View style={styles.slide}>
       <View style={{flex:2, backgroundColor:'blue',justifyContent: 'center', alignItems: 'center'}}>
         <View style={{justifyContent: 'center', alignItems: 'center', width:300, height:300, backgroundColor:'yellow', padding:40, borderRadius:150}}>
         </View>
       </View>
         <View style={{flex:1, backgroundColor:'red',justifyContent: 'flex-start', alignItems: 'center'}}>

            <Text style={styles.text}>   빠르고 안전한 이용을 위해{"\n"}자전거 도로를 이용해 주세요</Text>
         </View>
      </View>
    )
  }

  whereToParkScreen(){
    return(
      <View style={styles.slide}>
       <View style={{flex:2, backgroundColor:'blue',justifyContent: 'center', alignItems: 'center'}}>
         <View style={{justifyContent: 'center', alignItems: 'center', width:300, height:300, backgroundColor:'yellow', padding:40, borderRadius:150}}>
         </View>
       </View>
       <View style={{flex:1, backgroundColor:'red',justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text style={styles.text}>앱에 표시된 주차 구역에{"\n"} 킥보드를 반납해주세요</Text>
       </View>
      </View>
    )
  }

  helmetScreen(){
    return(
      <View style={styles.slide}>
       <View style={{flex:2, backgroundColor:'blue',justifyContent: 'center', alignItems: 'center'}}>
         <View style={{justifyContent: 'center', alignItems: 'center', width:300, height:300, backgroundColor:'yellow', padding:40, borderRadius:150}}>
         </View>
       </View>
         <View style={{flex:1, backgroundColor:'red',justifyContent: 'flex-start', alignItems: 'center'}}>
            <Text style={styles.text}>        헬멧을 착용하고 {"\n"}교통 법규를 잘 지켜주세요</Text>
         </View>
      </View>
    )
  }

  driverLicenceScreen(){
    return(
      <View style={styles.slide}>
       <View style={{flex:2, backgroundColor:'blue',justifyContent: 'center', alignItems: 'center'}}>
         <View style={{justifyContent: 'center', alignItems: 'center', width:300, height:300, backgroundColor:'yellow', padding:40, borderRadius:150}}>
         </View>
       </View>
         <View style={{flex:1, backgroundColor:'red',justifyContent: 'flex-start', alignItems: 'center'}}>
            <Text style={styles.text}> 운전면허증을 등록해주세요 </Text>
         </View>
      </View>
    )
  }




  render() {
    return (
<SafeAreaView style={{flex:1}}>
  <View style={{flex:1}}>

      {this.headerHandler()}

    <Swiper style={styles.wrapper} showsButtons={false}>
      {this.startScreen()}
      {this.howToRideScreen()}
      {this.whereToRideScreen()}
      {this.whereToParkScreen()}
      {this.helmetScreen()}
      {this.driverLicenceScreen()}
     </Swiper>

       {this.buttonButtonHandler()}

  </View>
</SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  }
})
