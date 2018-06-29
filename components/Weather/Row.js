import React from 'react'
import { View,Text,StyleSheet,Image} from  'react-native'
import PropTypes from 'prop-types'
import  moment from 'moment'
import Enter from '../Animations/DisplayAnimation'
import 'moment/locale/fr'
import globaleStyle from '../../Style'
moment.locale('fr')
export default class Row extends React.Component{
    static propTypes = {
        day: PropTypes.object,
        index: PropTypes.number
    }
    parseFarCel (tempF){
        var res = parseFloat(tempF)
        return (res-273.15)

    }
    icon (size= 50){
        const  type = this.props.day.weather[0].main.toLowerCase()

        switch (type){
            case 'clouds':
                image = require('../icons/weather/cloudy.png')
                break;
            case 'rain':
                image = require('../icons/weather/rain.png')
                break;
            default :
                image = require('../icons/weather/sun.png')

        }
        return <Image source={image} style={{ width: size ,height: size }}/>
    }

    getDay (){
        let day= moment(this.props.day.dt * 1000).format('ddd')
        return <Text style={[style.white,style.bold]}>{day.toUpperCase()}</Text>
    }

    getDate (){
        let date= moment(this.props.day.dt * 1000).format('DD/MM')
        return <Text>{date}</Text>
    }

    render (){
        if (this.props.index===0){
            return(
                <Enter delay={this.props.index * 50}>
                <View style={[style.view,{backgroundColor:'#e54b65'}]}>
                    <View style={{ flex:1 , flexDirection:'row' ,alignItems:'center'}}>
                        <Text style={{color:'#FFF'}}> {this.getDay()}{this.getDate()} </Text>

                        {this.icon(90)}
                    </View>
                    <Text style={[style.temp,{fontWeight:'bold',fontSize:35}]}> { Math.round(this.parseFarCel(this.props.day.main.temp))}°C </Text>
                </View>
                </Enter>
            )

        }else{
        return(
            <Enter delay={this.props.index * 50} >
            <View style={style.view}>
                <View style={{ flex:1 , flexDirection:'row' ,alignItems:'center'}}>
                    {this.icon()}
                    <Text style={{marginLeft:10 }}> {this.getDay()}{this.getDate()} </Text>
                </View>
                <Text style={style.temp}> { Math.round(this.parseFarCel(this.props.day.main.temp))}°C </Text>
         </View>
            </Enter>
        )
                    }
    }

}


const style = StyleSheet.create({
    white: {
        color : '#fff'
    },
    bold: {
        fontWeight: 'bold'
    }
    ,
    view : {
        backgroundColor: '#394163',
        borderWidth: 0 ,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal:20,
        paddingVertical: 10 ,
        flex: 1 ,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    temp : {
        color : '#FFF',
        fontWeight : 'bold',
        fontSize: 22

    },
    firstView:{
        backgroundColor: '#e54b65',

    }

})