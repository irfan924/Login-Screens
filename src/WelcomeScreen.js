import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native'


// Width and Height Variables for Responsiveness

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const WelcomeScreen = (props) => {


    return (

        <View style={styles.container}>

            <Image source={require('./images/getStarted.png')} style={styles.img} />

            {/* Get Started Text View*/}

            <View style={styles.textView}>

                <Text style={styles.mainText}>
                    Get Started
                </Text>
                <Text style={styles.subText}>
                    Learn to write to the best of your ability with the industry’s best writing resources covering fiction writing, nonfiction writing, professional advice on writing novels, poetry writing and more.
                </Text>
                
                <TouchableOpacity style={styles.btn}
                    onPress={()=> props.navigation.navigate('Signup')}
                >
                    <Text style={styles.btnText}>Get Started</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D7E5FF',
        width: width * 1,
        height: height * 1,
        display: 'flex',
        alignItems: 'center'
    },
    img: {
        width: width * 1,
        height: height * 0.5
    },
    textView: {
        height: height * 0.4,
        width: width * 0.8,
        display: 'flex',
        gap: height*0.05,
        alignItems: 'center',
    },
    mainText: {
        marginVertical: height*0.01,
        fontSize: height*0.04,
        color: '#367CFE',
        fontFamily: 'ubunto'
    },
    subText: {
        fontSize: height*0.02,
        color: 'black',
        fontFamily: 'dosis'
    },
    btn: {
        backgroundColor: '#367CFE',
        width: width*0.5,
        padding: width* 0.03,
        borderRadius: width*0.2
        
    },
    btnText: {
        textAlign: 'center',
        fontSize: height* 0.03,
        color: '#fff',
        fontFamily: 'dosis'
    }


})