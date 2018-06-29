import React from 'react'
import  {View,StatusBar,Image} from 'react-native'
import About from './components/About'
import Search from './components/Search'

import  {createBottomTabNavigator} from 'react-navigation'
const Tabs = createBottomTabNavigator({
    Search : {screen : Search},
    About : {screen : About}
},{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => {
            const { routeName } = navigation.state;

            if (routeName === 'Search') {
                return <Image source={require('./components/icons/home.png')} style={{ width:20 , height:20 }} />
            } else if (routeName === 'About') {
                return <Image source={require('./components/icons/user.png')} style={{ width:20 , height:20 }} />
            }

          }
     }),

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

    )
  }
}

