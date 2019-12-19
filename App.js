import React,{Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';



import Explore from  './screens/Explore'
import Saved from  './screens/Saved'
import Trips from  './screens/Trips'
import InBox from  './screens/InBox'


class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text> Open up A!</Text>

      </View>
    );
  }
}

//아이콘 ,스타일 설정
class IconWithBadge extends Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
//home icon  알림갯수 설정 
const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};
//icon 이름과 스크린 이름 매칭 
const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Explore') {
    iconName = `md-search${focused ? '' : ''}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Saved') {
    iconName = `md-heart-empty${focused ? '' : ''}`;
  }
  else if (routeName === 'Trips') {
    iconName = `md-airplane${focused ? '' : ''}`;
  }
  else if (routeName === 'InBox') {
    iconName = `md-add-circle-outline${focused ? '' : ''}`;
  }

  // You can return any component!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};





//tab 네비게이션 설정 
export default createAppContainer(
  createBottomTabNavigator(
    {
      //탭 스크린 갯수 및 띄워줄 갯수 설정      
      Explore: {
         screen: Explore,        
        },
      Saved: { 
        screen: Saved,
       },
       Trips:{
         screen:Trips,
       },
       InBox:{
         screen:InBox,
       }
    },
    {
      //기본네비게이션 옵션 -> getTabBarIcon에서 가져온 스타일설정
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      // 네비게이션 옵션스타일
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  )
);

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }


});