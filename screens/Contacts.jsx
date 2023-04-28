import { StyleSheet, Text, View,Button } from 'react-native';

export default function Contacts({navigation,route}){
  //  let mtitle =route.params.title;
        const {name,email} = route.params
    return (
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}> 
        <Text style={{marginBottom:10}}> Estamos en contactenos</Text>
        <text>Nombre completo es {name} con correo: {email}</text>
   
        </View>
    );
}
