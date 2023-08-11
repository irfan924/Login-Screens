import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

// Import Lottie View For Animations

import LottieView from 'lottie-react-native';

// Import Navigation for Navgite Current Screen To Other Once

import { useNavigation } from '@react-navigation/native'

// Import firebase Authenication for Signing In App

import auth from '@react-native-firebase/auth'

// Width and Height Variables for Responsiveness

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Home = (props) => {

    // Navigation Variable for Navigations

    const navigation = useNavigation();

    return (
        <View style={styles.container}>


            <TouchableOpacity
                style={styles.btn}
                onPress={async () => {
                    await auth().signOut();
                    navigation.navigate('WelcomeScreen')
                }}
            >
                <Text style={styles.btnText}>
                    Log Out
                </Text>
            </TouchableOpacity>

            {/* WellcomText */}

            <View style={styles.welcomeTextView}>
                <Text style={styles.myText}>Welcome Onboard!</Text>
            </View>

            {/* Animations  */}

            <LottieView
                source={require('./Animations/homeScreen')}
                style={styles.animation}
                loop={true}
                autoPlay={true}
            />

            <View style={styles.textView}>
                <Text style={styles.textPara}>
                    “I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.” <Text style={styles.bold}>—Michael Jordan</Text>
                </Text>
            </View>


        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D7E5FF',
        width: width * 1,
        height: height * 1,
    },
    btn: {
        height: height * 0.05,
        width: width * 0.2,
        position: 'absolute',
        top: 15,
        right: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: width * 1,
    },
    btnText: {
        color: '#000',
        fontFamily: 'dosis'
    },
    welcomeTextView: {
        marginTop: height * 0.1
    },
    myText: {
        fontSize: height * 0.05,
        color: '#000',
        fontFamily: 'dosis',
        textAlign: 'center'
    },
    animation: {
        width: width * 1,
        height: height * 0.5,
    },
    textView: {
        display: 'flex',
        alignItems: 'center'
    },
    textPara: {
        width: width * 0.9,
        fontSize: height * 0.02,
        textAlign: 'justify',
        fontFamily: 'dosis',
        color: '#000',
        backgroundColor: '#fff',
        padding: width * 0.05,
        borderRadius: 20
    },
    bold: {
        fontFamily: 'ubuntu'
    }



})