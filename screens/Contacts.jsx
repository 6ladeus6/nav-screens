import { StyleSheet, Text, View,Button } from 'react-native';

export default function Contacts({navigation,route}){
  //  let mtitle =route.params.title;
        console.log(route.params);
    return (
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}> 
        <Text style={{marginBottom:10}}> Estamos en contactenos</Text>
   
        </View>
    );
}
