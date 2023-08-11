import React, { useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,
    Alert
} from 'react-native';


// Vector Icons Import
import Icon from 'react-native-vector-icons/Ionicons';

// Import Firestor for Database
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// Width and Height Variables for Responsiveness
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


const Signup = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // Initial State or Value of our TextInputs
    const initialState = () => {
        setName('');
        setEmail('');
        setPass('');
    };

    // Function for Creating Account
    const hanleSignup = async () => {

        const response = await auth().createUserWithEmailAndPassword(email, pass);
    }

    // Function for Storing Data on FireStore and also create account on Firebase Auth
    const setData = () => {

        if (name == '' && email == '' && pass == '') {
            Alert.alert('Please enter All Fields and Try again!')
        }
        else 
        {
            firestore().collection('users').doc().set({
                name: name,
                email: email,
                pass: pass
            });
            hanleSignup();
            initialState();
            props.navigation.navigate('Signin');
        }
    }

    return (

        <View style={styles.container}>

            {/* Image for Ui Beauty  */}

            <Image source={require('./images/signup1.png')} style={styles.img1} />

            {/* Back Arrow Button */}

            <TouchableOpacity style={styles.arrowBtn}
                onPress={() => props.navigation.navigate('getStarted')}
            >
                <Icon name='chevron-back' size={width * 0.06} color='#367CFE' />
            </TouchableOpacity>

            {/* Dummy Creat Account Header Text */}

            <View style={styles.welcomeTextView}>
                <Text style={styles.myText}>Create</Text>
                <Text style={styles.myText}>Account</Text>
            </View>


            {/* Place Holders */}

            <View style={styles.textInputView}>

                <TextInput
                    placeholder='Name'
                    style={styles.myInput}
                    placeholderTextColor={'#000'}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
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
                    onChangeText={(text) => setPass(text)}
                    secureTextEntry={true}
                />

            </View>

            {/* SignUp Button */}

            <TouchableOpacity style={styles.signupBtn}
                onPress={() => setData()}
            >
                <Text style={styles.signupBtnText}>Sign Up</Text>
                <Icon name='chevron-forward' size={height * 0.05} color='#367CFE' />

            </TouchableOpacity>

            {/* Image 2 for UI Beauty */}

            <Image source={require('./images/signup2.png')} style={styles.img2} />

            {/* Bottom Links  */}

            <View style={styles.bottomView}>

                {/* Signin Button */}

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Signin')}
                >
                    <Text style={styles.signinBtn}>Sign in</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D7E5FF',
        width: width * 1,
        height: height * 1,
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
    img1: {
        width: width * 1,
        height: height * 0.35
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
        marginTop: height * 0.04
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
    signupBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: width * 0.03,
        marginHorizontal: width * 0.1,
    },
    signupBtnText: {
        fontSize: height * 0.04,
        color: 'black',
        fontFamily: 'ubuntu',
    },
    bottomView: {
        position: 'absolute',
        bottom: height * 0.15,
        right: width * 0.1
    },
    signinBtn: {
        fontSize: height * 0.02,
        textDecorationLine: 'underline',
        fontFamily: 'poppins',
        color: 'black'
    },
    img2: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: height * 0.27,
        width: width * 0.55,
    }
});