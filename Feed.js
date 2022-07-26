import React,{Component} from "react"
import {Text,View,SafeAreaView,StatusBar,Platform,StyleSheet} from 'react-native'

import AppLoading from "expo-app-loading";
import * as Font from "expo-font"

let customFonts={
    "Bubblegum-Sans":require("../assets/fonts/BubblegumSans-Regular.ttf")}

export default class Feed extends Component{
    constructor(props){
        super(props)
        this.state={
            fontsLoaded:false
        }
    }

    async _loadFontsAsync(){
        await Font.loadAsync(customFonts)
        this.setState({fontsLoaded:true})
    }
    
    componentDidMount(){
       this._loadFontsAsync() 
    }
    
    render(){
        if(!this.state.fontsLoaded){
            return <AppLoading/>
        }
        else{
        return(
            <View style={StyleSheet.container}>

                <Text>Feed</Text>
            </View>
        )
    }
}
}

const styles=StyleSheet.create({
    
})