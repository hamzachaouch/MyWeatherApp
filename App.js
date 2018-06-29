import React from 'react';
import  {View,StatusBar} from 'react-native'
import About from './components/About'
import Search from './components/Search'

import  {createBottomTabNavigator} from 'react-navigation'
const Tabs = createBottomTabNavigator({
    Search : {screen : Search},
    About : {screen : About}
},
    {
        tabBarOptions:{
         showIcon : true,
         showLabel:false,
        IndicatorStyle:{
           height:2,
            backgroundColor:'#fff'
        },
         style :{
           backgroundColor :'#a2273c',
             borderTopWidth:1,
             borderColor:'#2f0c1b'
         }
        },
    })
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
          <StatusBar hidden={true}/>
          <Tabs/>
      </View>

    );
  }
}

