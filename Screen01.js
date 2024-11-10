import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const App = ({navigation})=>{
    return (
        <View style = {Styles.container}>
            <View style = {Styles.Part1}>
                <Text style = {Styles.TextP1}>A premium online store for sporter and their stylish choice</Text>
                <View style = {Styles.backgroungImage}>
                    <Image source={require('./Images/bifour_-removebg-preview (1).png')} style = {{width:292, height:270}}/>
                </View>
            </View>

            <View style = {Styles.Part2}>
                <Text style = {Styles.TextP2}>POWER BIKE SHOP</Text>
                <TouchableOpacity style = {Styles.Button} onPress={() => navigation.navigate('Screen02')}>
                    <Text style = {Styles.ButtonName}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Part1:{
        flex:2.25,
        justifyContent:'center',
        alignItems:'center'
    },
    Part2:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    TextP1:{
        color:'#000000',
        fontWeight:400,
        fontSize:26,
        textAlign:'center',
        marginBottom:20
    },
    backgroungImage:{
        backgroundColor:'#E941411A',
        borderRadius:50,
        width:339,
        height:368,
        justifyContent:'center',
        alignItems:'center'
    },
    TextP2:{
        color:'#000000',
        fontWeight:700,
        fontSize:26,
        width:180,
        textAlign:'center',
        top:-30
    },
    Button:{
        width:340,
        height:61,
        borderRadius:30,
        backgroundColor:'#E94141',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:30
    },
    ButtonName:{
        color:'#FEFEFE',
        fontWeight:400,
        fontSize:27
    }

})
export default App;