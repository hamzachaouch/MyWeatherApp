import React from "react"
import {Animated} from "react-native"



export  default class DisplayAnimation extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            pan : new Animated.ValueXY({x:200, y:0})
        }
    }
    componentDidMount (){
         Animated.timing(
             this.state.pan,
             {
                 duration:3000,
                 toValue: {x:0 ,y:0}
             }
         ).start()
    }

    render(){
        return (
            <Animated.View
            style={{
                ...this.props.style,
                transform: this.state.pan.getTranslateTransform()
            }}>
                {this.props.children}
            </Animated.View>
        )
    }
}