import React, { useEffect, } from 'react'
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native'

// Import Lottie View For Animations

import LottieView from 'lottie-react-native';

// Import Navigation for Navgite Current Screen To Other Once

import { useNavigation,StackActions } from '@react-navigation/native'

// Import firebase Authenication for Signing In App

import auth from '@react-native-firebase/auth'


// Width And Height for Responsiveness
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            auth().onAuthStateChanged(user => {
                const roteScreen = user !== null ? 'Home' : 'getStarted';
                
                navigation.dispatch(StackActions.replace(roteScreen));
            })
        }, 3000)
    }, []);

    return (
        <View style={styles.container}>
            <LottieView
                source={require('./Animations/splashAnimation.json')}
                style={styles.animation}
                loop={true}
                autoPlay={true}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D7E5FF'
    },
    animation: {
        width: width * 1,
        height: height * 0.5,
    },
})