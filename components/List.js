import React from  'react'
import  {ListView,Text,Image,ActivityIndicator} from 'react-native'
import  style from '../Style'
import  axiox from 'axios'
import InfoRow from './Weather/Row'
export default  class List extends  React.Component{
    static  navigationOptions = ({navigation})=> {
        return {
            title : `Météo / ${navigation.state.params.city}`,
            tabBarIcon: ()=>{
                return <Image source={require('./icons/home.png')} style={{ width:20 , height:20 }} />
            }
        }
    }

    constructor (props){
        super(props)

        this.state={
        city : this.props.navigation.state.params.city ,
        report : null
        }
        setTimeout(()=>{
            this.fetchWeather()
        },1000)

    }
    fetchWeather(){

        axiox.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&appid=754adc8a2fc80f0c469065a538915e19`)
            .then((response)=>{
                console.log(response.data)

                this.setState({report:response.data})
            })
    }

        render (){
            if (this.state.report===null){
                return (
                <ActivityIndicator  color={style.color} size="large"/>
                )
            }else{
                const  ds= new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2})

                return(
                    <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list) }

                   renderRow={ (row,j,k) => <InfoRow day={row} index={parseInt(k,10)} /> }
                    />


                    )
            }



    }


}