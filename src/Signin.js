import React, { useState } from 'react';

import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

import {useNavigation, StackActions} from '@react-navigation/native'

// Vector Icons Import
import Icon from 'react-native-vector-icons/Ionicons'

// Import Firebase Authentication
import auth from '@react-native-firebase/auth'

// Width and Height Variables for Responsiveness

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Signin = (props) => {

    const navigation = useNavigation();

    // for Handling Signing In with the help of Auth
    const handleSignin = async () => {
        const response = await auth().signInWithEmailAndPassword(email, pass);
        navigation.dispatch(StackActions.replace('Home'))       
    }
    // Use States for Getting Data from TextInputs
    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');

    return (
        <View style={styles.container}>

            {/* Upper Design */}

            <View style={styles.imgView}>
                <Image source={require('./images/signin3.png')} style={styles.img3} />
                <Image source={require('./images/signin2.png')} style={styles.img2} />
                <Image source={require('./images/signin1.png')} style={styles.img1} />
            </View>

            {/* Back Arrow Button */}

            <TouchableOpacity style={styles.arrowBtn}
                onPress={() => props.navigation.navigate('Signup')}
            >
                <Icon name='chevron-back' size={width * 0.06} color='#367CFE' />
            </TouchableOpacity>

            {/* WellcomText */}

            <View style={styles.welcomeTextView}>
                <Text style={styles.myText}>Welcome</Text>
                <Text style={styles.myText}>Back</Text>
            </View>

            {/* Place Holders */}
            <View style={styles.textInputView}>

                <TextInput
                    placeholder='Your Email'
                    style={styles.myInput}
                    placeholderTextColor={'#000'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.myInput}
                    placeholderTextColor={'#000'}
                    value={pass}
                    onChangeText={(text) => setpass(text)}
                    secureTextEntry={true}
                />

            </View>

            {/* Signin Button */}

            <TouchableOpacity style={styles.signinBtn}
                onPress={() => handleSignin()}
            >
                <Text style={styles.signinBtnText}>Sign In</Text>
                <Icon name='chevron-forward' size={height * 0.05} color='#367CFE' />
            </TouchableOpacity>


            {/* Bottom Links  */}
            <View style={styles.bottomView}>

                {/* SignUp Button */}
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Signup')}
                >
                    <Text style={styles.signupBtn}>Sign Up</Text>
                </TouchableOpacity>

                {/* Forgot Password */}
                <TouchableOpacity>
                    <Text style={styles.forgotBtn}>Forgot Password</Text>
                </TouchableOpacity>
            </View>


        </View>

    )
}

export default Signin

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D7E5FF',
        width: width * 1,
        height: height * 1,
    },
    imgView: {
        width: width * 1,
        height: height * 0.45
    },
    img1: {
        position: 'absolute',
        height: height * 0.14
    },
    img2: {
        width: width * 1,
        position: 'absolute',
        height: height * 0.37
    },
    img3: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: height * 0.46
    },
    arrowBtn: {
        position: 'absolute',
        top: 20,
        left: 15,
        width: width * 0.09,
        height: width * 0.09,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.045
    },
    welcomeTextView: {
        position: 'absolute',
        top: height * 0.16,
        left: width * 0.05,
    },
    myText: {
        fontSize: height * 0.05,
        color: '#fff',
        fontFamily: 'ubuntu'
    },
    textInputView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myInput: {
        width: width * 0.8,
        backgroundColor: '#fff',
        marginVertical: height * 0.008,
        borderRadius: width * 0.05,
        color: '#000',
        fontSize: height * 0.02,
        paddingHorizontal: width * 0.07,
        fontFamily: 'dosis',
        fontWeight: '700'
    },
    signinBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: width * 0.03,
        marginHorizontal: width * 0.1,
    },
    signinBtnText: {
        fontSize: height * 0.04,
        color: 'black',
        fontFamily: 'ubuntu',
    },
    bottomView: {
        position: 'absolute',
        bottom: height * 0.125,
        display: 'flex',
        flexDirection: 'row',
        gap: width * 0.35,
        paddingHorizontal: width * 0.04
    },
    signupBtn: {
        fontSize: height * 0.02,
        textDecorationLine: 'underline',
        fontFamily: 'poppins',
        color: 'black'
    },
    forgotBtn: {
        fontSize: height * 0.02,
        textDecorationLine: 'underline',
        fontFamily: 'poppins',
        color: 'red'
    }


})