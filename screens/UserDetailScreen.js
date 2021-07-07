import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, ScrollView, Button, ActivityIndicator, Alert } from 'react-native';
import firebase from '../database/firebase';

const UserDetailScreen = (props) => {

    const initialState = {
        id: '',
        name: '',
        email: '',
        phone: ''
    }

    const [user, setUser] = useState(initialState);
    const [loading, setLoading] = useState(true);

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id);
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({
            ...user,
            id: doc.id,
        });
        setLoading(false);
    };

    useEffect(() => {
        getUserById(props.route.params.userId);
    }, []);

    const handleChangeText = (name, value) => {
        setUser({ ...user, [name]: value });
    };

    const deleteUser = async () => {
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId);
        await dbRef.delete();
        props.navigation.navigate('UsersList');
    }

    const updateuser = async () => {
        const dbref = firebase.db.collection('users').doc(user.id);
        await dbRef.set({
            name: user.name,
            email: user.email,
            phone: user.phone
        });
        setUser(initialState);
        props.navigation.navigate('UsersList');
    }

    const openConfirmationAlert = () => {
        Alert.alert('Remove the user', 'Are you sure?', [
            {text: 'Yes', onPress: () => deleteUser()},
            {text: 'No', onPress: () => console.log(false)},
        ]);
    }

    if(loading){
        return(
            <View>
                <ActivityIndicator size="large" color="#9e9e9e"/>
            </View>
        );
    }

    return (
        <ScrollView style = { styles.container }>
            <View style = { styles.inputGroup }>
                <TextInput placeholder= "Name User" onChangeText={ (value) => handleChangeText ('name', value) } value={user.name} />
            </View>
            <View style = { styles.inputGroup }>
                <TextInput placeholder= "Email User" onChangeText={ (value) => handleChangeText ('email', value) } value={user.email} />
            </View>
            <View style = { styles.inputGroup }>
                <TextInput placeholder= "Phone User" onChangeText={ (value) => handleChangeText ('phone', value) } value={user.phone} />
            </View>
            <View style = { styles.inputGroup }>
                <Button color="#19AC52" title= "Update User" onPress={ () => updateuser() }/>
            </View>
            <View style = { styles.inputGroup }>
                <Button color="#E37399" title= "Delete User" onPress={ () => openConfirmationAlert() }/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
});

export default UserDetailScreen;