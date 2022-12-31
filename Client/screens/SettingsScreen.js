import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

function SettingsScreen() {

    const navigation = useNavigation();

    const DATA = [
        {
            id: 1,
            title: 'Background'
        },
        {
            id: 2,
            title: 'Payment Method'
        },
        {
            id: 3,
            title: 'Add favourite places'
        },
        {
            id: 4,
            title: 'Privacy'
        },
        {
            id: 5,
            title: 'Terms of Service'
        },
        {
            id: 6,
            title: 'Rate the app'
        }
    ]

    const Header = () => (
        <View style={{height: 85, backgroundColor: '#3656A9', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Settings</Text>
        </View>
    );

    const Driver = ({ item }) => (
        <View style={styles.settingContainer} onTouchEnd={() => navigation.navigate('NotImplemented')}>
            <Text style={styles.settingText}>{item.title}</Text>
            <Icon name="chevron-right" color={'#3656A9'} size={20} style={{marginRight: 50}}></Icon>
        </View>
      );
    
  return (
    <View>
        <Header />
        <View style={styles.listContainer}>
            <FlatList data={DATA}
            renderItem={({item}) => <Driver item={item} />}
            keyExtractor={item => item.id} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    listContainer: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    settingContainer: {
        height: 108.7,
        width: 400,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#BBC7F2',
        borderColor: '#3656A9',
        flexDirection: 'row'
    },
    settingText: {
        color: '#3656A9',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20
    }
  });


export default SettingsScreen