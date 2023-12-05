import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="person" size={25} color="white" style={styles.icon} />
            </TouchableOpacity>

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="white" style={styles.searchIcon} />
                <Text style={styles.searchText}>Find Apartments</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                <Ionicons name="menu" size={25} color="white" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Ionicons name="notifications" size={25} color="white" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        elevation: 5,
        shadowColor: 'black', //
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
        color: 'black'
    },
    searchText: {
        color: 'black',
        fontSize: 16,
    },
    icon: {
        marginLeft: 10,
    },
});

export default Header;
 