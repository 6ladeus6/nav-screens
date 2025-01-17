import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contacts from './screens/Contacts';
//import Loguin from './screens/loguin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react';

//crear constante para generar las rutas de las pantallas(screens)

let users = [
  {
    email: 'hruiz@gmail.com',name: 'Humberto Ruiz',password: '11', role: 1
  },
  {
    email: 'jdoe@gmail.com',name: 'Jhon Doe',password: '22', role: 2
  }
]
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeTabs'>
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{title: 'Sistema Prueba'}}/>
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function HomeScreen({navigation}){
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errormess,seterrormess] = useState('')
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:20}}>Inicio de sesión</Text>
      <TextInput
      style={{marginBottom:10}}
        label="Correo electronico"
        mode='outlined'
        left={<TextInput.Icon icon = "account"/>}
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <TextInput
      style={{marginBottom:10}}
        label="Contraseña"
        mode='outlined'
        left={<TextInput.Icon icon = "eye"/>}
        onChangeText={password => setPassword(password)}
        value={password}
      />
      <Button
        icon = "login"
        mode = "contained"
        onPress={() =>{
          let findUser = users.find(usr => usr.email == email && usr.password == password)
          if(findUser != undefined){
              seterrormess('')
              const {name,email} = findUser
              setEmail('')
              setPassword('')
              navigation.navigate('Contacts',{name:name,email:email})
          }
          else{
              seterrormess('Correo y/o contraseña incorrecto(S)')
          }
        }}
        
        >Iniciar Session</Button>
        <Text style={{color:'red'}}>{errormess}</Text>

    </View>
  );
}
function ProductsScreen({navigation}){
  let title="Este es el titulo"
  let fullname = "Roxy la mejor de lo mejor"
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:20}}>Estamos en Productos</Text>
    </View>
  );
}

function HomeTabs(){
  return(
    <Tab.Navigator
    
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor:'gray',
        tabBarActiveBackgroundColor: 'powderblue',
        tabBarInactiveBackgroundColor: 'purple',
      }}
    
    >
        <Tab.Screen name="Home" component = {HomeScreen} options={{
          tabBarStyle:{display:'none'},
          tabBarIcon: (tabInfo)=>(<MaterialIcons name = 'home' size = {22}/>)
          
          }}/>
        <Tab.Screen name="Products" component = {ProductsScreen} options={{
          tabBarIcon: (tabInfo)=>(<MaterialIcons name = 'category' size = {22}/>)
          
          }}/>
        <Tab.Screen name="Contacts" component = {Contacts} options={{
          tabBarIcon: (tabInfo)=>(<MaterialIcons name = 'contact-support' size = {22}/>)
          
          }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
