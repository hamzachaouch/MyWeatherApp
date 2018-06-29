import React from  'react'
import  {ListView,Text,ActivityIndicator} from 'react-native'
import  style from '../Style'
import  axiox from 'axios'
export default  class List extends  React.Component{
    static  navigationOptions = ({navigation})=> {
        return {
            title : `Météo / ${navigation.state.params.city}`
        }
    }

    constructor (props){
        super(props)

        this.state={
        city : this.props.navigation.state.params.city ,
        report : null
        }
        this.fetchWeather()
    }
    fetchWeather(){
        axiox.get(`https://samples.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&appid=754adc8a2fc80f0c469065a538915e19`)
            .then((response)=>{
                console.log(response.data)
                this.state.report = response.data
            })
    }

        render (){
            if (this.state.report===null){
                return (
                <ActivityIndicator  color={style.color} size="large"/>
                )
            }else{
                const  ds= new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !==r2})

                return(
                    <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list.main) }
                    renderRow={ (row) => <Text> { row.temp }  </Text>}
                    />


                    )
            }



    }


}