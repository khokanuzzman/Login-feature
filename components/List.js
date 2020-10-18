// import { ListItem, Avatar } from 'react-native-elements'
// import React, { Component } from 'react'
// import {FlatList, SafeAreaView} from 'react-native'

// const list = [
//   {
//     name: 'Amy Farha',
//     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//     subtitle: 'Vice President'
//   },
//   {
//     name: 'Chris Jackson',
//     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//     subtitle: 'Vice Chairman'
//   },
  
// ]
// class List extends Component{



// keyExtractor = (item, index) => index.toString()

// renderItem = ({ item }) => (
//   <ListItem bottomDivider>
//     <Avatar source={{uri: item.avatar_url}}/>
//     <ListItem.Content>
//       <ListItem.Title>{item.name}</ListItem.Title>
//       <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
//     </ListItem.Content>
//     <ListItem.Chevron />
//   </ListItem>
// )

// render () {
//   return (
//       <SafeAreaView>
//           <FlatList
//       keyExtractor={this.keyExtractor}
//       data={list}
//       renderItem={this.renderItem}
//     />

//       </SafeAreaView>
    
//   )
// }
// }
// export default List

import React from 'react';
import { View, FlatList, SafeAreaView,Text,Image } from 'react-native';
import { ListItem ,Avatar} from 'react-native-elements';

function List(props) {

    const renderListItem = ({item, index}) => {

        return (
            
                <ListItem bottomDivider
                    key={index}
                    title={item.name}
                    subtitle={item.status}
                    hideChevron={true}
                    onPress={() => props.onPress(item.id)}
                    leftAvatar={
                       
                        <View>
                            <Image source={item.image}
                            style={{ width: 40, height: 40 }}/>

                        </View>
                    }
                  

                    />
                   
                  
        );
    };

    return (
        <SafeAreaView>
            <Text style={{fontWeight: "bold", margin: 10, fontSize:30}}>Patient List</Text>
            <FlatList 
                data={props.patients}
                renderItem={renderListItem}
                keyExtractor={item => item.id.toString()}
                />

        </SafeAreaView>
            
    );
}


export default List;
