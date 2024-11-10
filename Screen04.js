import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBikes } from './redux/BikeSlice';

const App = ({ navigation }) => {

    // const [name, setName] = useState('');
    // const [price, setPrice] = useState('');
    // const [image, setImage] = useState('');
    // const [description, setDescription] = useState('');
    const [bike, setBike] = useState({
        id: '',
        name: '',
        price: '',
        image: '',
        description: ''
    })
    const dispatch = useDispatch();
    return (
        <View style={Styles.container}>
            <View style={{ height: 90, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 700 }}>thêm sản phẩm</Text>
            </View>
            <View style={{ flex: 1, width: '90%' }}>
                <Text style={Styles.Text}>Id</Text>
                <TextInput style={Styles.textInput}
                    value={bike.id}
                    onChangeText={(val) => setBike({ ...bike, id: val })} />
                <Text style={Styles.Text}>Name</Text>
                <TextInput style={Styles.textInput}
                    value={bike.name}
                    onChangeText={(val) => setBike({ ...bike, name: val })} />
                <Text style={Styles.Text}>Price</Text>
                <TextInput style={Styles.textInput}
                    value={bike.priceprice}
                    onChangeText={(val) => setBike({ ...bike, price: val })} />
                <Text style={Styles.Text}>Image</Text>
                <TextInput style={Styles.textInput}
                    value={bike.imageimage}
                    onChangeText={(val) => setBike({ ...bike, image: val })} />
                <Text style={Styles.Text}>Description</Text>
                <TextInput style={Styles.textInput}
                    value={bike.description}
                    onChangeText={(val) => setBike({ ...bike, description: val })} />
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={Styles.ButtonThem} onPress={() => {
                        dispatch(addBikes(bike));
                        navigation.navigate('Screen02');
                    }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 700 }}>Thêm</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',

    },
    Text: {
        fontSize: 16,
        fontWeight: 400
    },
    ButtonThem: {
        width: 300,
        height: 50,
        backgroundColor: '#33CCFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
})
export default App;