import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList, Dimensions } from 'react-native';

const widthWindow = Dimensions.get('window').width;

const App = ({route, navigation })=>{
    const { item } = route.params;

    var calculatePrice = item.price - (item.price * 15 / 100);

    return (
        <View style = {Styles.container}>
            <View style = {Styles.Part1}>
                <View style = {Styles.BackgroundImage}>
                    <Image source={item.image} style = {{width:'100%', height:310}}/>
                </View>
            </View>

            <View style = {Styles.Part2}>
                <Text style = {Styles.Name}>{item.name}</Text>
                <View style = {{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-start', width:'75%'}}>
                    <Text style = {Styles.SaleOff}>15% OFF I {calculatePrice}$</Text>
                    <Text style = {Styles.Price}>{item.price}$</Text>
                </View>
                <Text style = {Styles.Description}>Description</Text>
                {/* <Text style = {Styles.DescriptionContent}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text> */}
                <Text style = {Styles.DescriptionContent}>{item.description}</Text>

            </View>

            <View style = {Styles.Part3}>
                <Image source={require('./Images/akar-icons_heart.png')} style = {{width:35, height:35}}/>
                <TouchableOpacity style = {Styles.Button} onPress={() => navigation.goBack('Screen02')}>
                    <Text style = {Styles.ButtonName}>Add to card</Text>
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
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
    },
    Part2:{
        flex:1.5,
        justifyContent:'space-around',
        alignItems:'flex-start',
    },
    Part3:{
        flex:0.5,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        width:widthWindow,
    },
    BackgroundImage:{
        width:339,
        height:348,
        backgroundColor:'#E941411A',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
        marginTop:20
    },
    Name:{
        color:'#000000',
        fontWeight:400,
        fontSize:35,
        marginLeft:10,
        marginTop:10
    },
    SaleOff:{
        color:'#00000096',
        fontWeight:400,
        fontSize:25,
        marginLeft:10
    },
    Price:{
        color:'#000000',
        fontWeight:400,
        fontSize:25,
        textDecorationLine:'line-through'
    },
    Description:{
        color:'#000000',
        fontWeight:400,
        fontSize:25,
        marginLeft:10
    },
    DescriptionContent:{
        color:'#00000091',
        fontWeight:400, 
        fontSize:22,
        marginLeft:10
    },
    Button:{
        backgroundColor:'#E94141',
        width:269,
        height:54,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    ButtonName:{
        color:'#FFFAFA',
        fontWeight:400,
        fontSize:25
    }
})
export default App;