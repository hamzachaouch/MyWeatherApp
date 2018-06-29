import React from 'react'
import {Button, TextInput,Image,View,Keyboard} from 'react-native'
import style from  '../Style'
import  List from './List'
import  {createStackNavigator} from  'react-navigation'
 class Search extends React.Component{
     static  navigationOptions = ()=> {
         return {
             title : 'Rechercher une ville',
             tabBarIcon: ()=>{
                 return <Image source={require('./icons/home.png')} style={{ width:20 , height:20 }} />
             }
         }
     }

     constructor(props){
        super(props)
        this.state = {
            city:'Montpelier'
            }
        }


    setCity (city){
        this.setState({city})
    }

    submit(){
         Keyboard.dismiss()
        this.props.navigation.navigate('Result',{city: this.state.city})
    }

    render(){
         return(
               <View style={style.container}>

                   <TextInput
                       underlineColorAndroid='transparent'
                       onSubmitEditing={()=>this.submit()}
                       onChangeText={(text)=> this.setCity(text)}
                       style={{height: 40, borderColor: 'gray', borderWidth: 1,marginBottom: 20,paddingHorizontal: 10}}
                       value={this.state.city}

                   />
                   <Button color={style.color} onPress={ ()=> this.submit()} title='Rechercher' />
               </View>
            )
    }

}


const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle:style.headerTitle,
}

export  default createStackNavigator({
    Search:{
        screen : Search,
        navigationOptions,

    },
    Result : {
        screen: List,
        navigationOptions,
    }
})











