import Home from '../Screens/PantallaPrincipal'
import { Image } from 'react-native'
import IniciarSesion from '../Screens/IniciarSesion'
import Login from '../Screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Registrarse from '../Screens/Registrarse'
import RmTracker from '../Screens/RmTracker'
import WarmUps from '../Screens/WarmUps'
import color from '../constant/color'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Training = () => {

    const Stack= createNativeStackNavigator()

    const LogoTitle=()=>(
        <Image
            source={require('../../src/assets/image/pngegg.png')}
            style={{width:60,height:60,margin:5}}
        />
    )



    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
                <Stack.Screen name='IniciarSesion' component={IniciarSesion} options={{headerShown:false}}/>
                <Stack.Screen name='Registrarse' component={Registrarse} options={{headerShown:false}}/>
                <Stack.Screen name='Home' component={Home} options={{
                    headerStyle:{
                        backgroundColor:color.terciary,
                    },
                    headerTintColor:'#fff',
                    headerTitle:(props)=> <LogoTitle {...props}/>,
                    headerTitleAlign: 'center',
                }}/>
                <Stack.Screen name='RmTracker' component={RmTracker} options={{
                    headerShown:false
                }}/>
                <Stack.Screen name='WarmUps' component={WarmUps} options={{
                    headerShown:false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Training