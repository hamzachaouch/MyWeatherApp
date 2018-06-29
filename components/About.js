import React from 'react'
import {View,Text,StyleSheet,Image,Button} from 'react-native'
import style from  '../Style'

export default class About extends React.Component
{
   static  navigationOptions = ()=> {
        return {
            tabBarIcon: ()=>{
                return <Image source={require('./icons/user.png')} style={{ width:20 , height:20 }} />
            }
        }
    }
    

    find(){
        this.props.navigation.navigate('Search')
    }

    render(){
        return(
            <View style={ style.container}>
            <Text style={style.title} >A propos de l'application</Text>
            <Text> Lorem ipsum dolor sit amet, consectetur
                     adipisicing elit. Amet, aut consectetur dolore, esse facere mollitia odio odit officia sint
                     suscipit, tempore unde vero! Corporis cupiditate facere laboriosam, mollitia possimus quaerat? </Text>
                <Button style={style.button} color={style.color} onPress={()=>this.find()} title="Rechercher une Ville" />


            </View>
                )

    }

}


