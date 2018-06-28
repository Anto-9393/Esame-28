import React from 'react';
import { Text, View, StyleSheet, FlatList, Image,ActivityIndicator } from 'react-native';
import {Feather,MaterialCommunityIcons, Ionicons,TouchableOpacity} from '@expo/vector-icons'; 

import {StackNavigator} from 'react-navigation';

// You can import from local files

// or any pure javascript modules available in npm
 // Version can be specified in package.json

export default class Home extends React.Component {
  state = {
    datalist: [],
    loading:false,
  };
 renderSeparator = () => {
    return(
        <View style={styles.stylerendersep}>
        
        </View>
      )
  }
componentDidMount (){
    const url = 'http://www.dmi.unict.it/~calanducci/LAP2/favorities.json'
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson.data,
        isLoading: false
      }) 
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  renderRow = ({item}) => {
    return(
      <View style={styles.viewstyle}>
      <Image  style={{ height: 200, width: null, flex: 1 }}  source={{uri: item.img}}/>
      <View style={styles.container2}>
      <View style={styles.tags}>
       <Text style={styles.testo}>{item.name}</Text>
        <Text style={styles.testo}>{item.address}</Text>
         <Text style={styles.tags}>{item.tags}</Text>
      </View>
      </View>
    </View>
      )
     
  }
 render() {
    return (
      this.state.loading ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator size="large" animating/></View> :
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderRow}
          keyExtractor={(item,index) => index}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}
 Home.navigationOptions = ({ navigation }) => ({
    title: "Ristoranti",
    headerStyle: {
      backgroundColor:"rgb(4, 159, 239)"
    },
    headerTintColor: "#fff",
  
  });
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  viewstyle: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 30
  },
  container2:{

    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
    },
  testo: {
    backgroundColor: "#2f60af",
  borderRadius : 8,
  padding: 1,
  margin: 2,
  overflow: "hidden",
  color: "white",
  fontSize: 13,
  },
  tags: {
  backgroundColor: "#4286f4",
  borderRadius : 10,
  padding: 1,
  margin: 1,
  overflow: "hidden",
  color: "white",
  
  
},
  stylerendersep: {
    height: 1,
    width: '100%',
    backgroundColor: 'black'
  },
});
