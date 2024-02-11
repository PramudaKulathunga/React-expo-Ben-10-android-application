import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from '@expo/vector-icons';
import { Pressable,View } from "react-native";

import HomeScreen from "./screen/HomeScreen";
import AboutPage from "./screen/AboutPage";
import Dashboard from "./screen/Dashboard";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>

            {/*Drawer natigation start*/}
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'rgb(230,235,8)',
                    },
                    headerTitleStyle: { fontWeight: 'bold' },
                    drawerLabelStyle:{fontSize:20,fontWeight:'bold',color:'black'},
                    drawerActiveBackgroundColor: 'rgb(200,200,8)',
                    drawerContentStyle: {
                        backgroundColor: 'rgb(2,100,0)',
                    },
                }}
            >
                {/*First drawer navigation (in this navigation there are two stack navigations)*/}
                <Drawer.Screen name="Main" options={{title:'HOME', headerShown: false}}>

                    {/*Stack navigation start*/}
                    {({ navigation }) => (
                        <Stack.Navigator
                            initialRouteName="Home"
                            screenOptions={{
                                headerStyle: {
                                    backgroundColor: 'rgb(230,235,8)',
                                },
                                headerTitleStyle: { fontWeight: 'bold' },
                            }}
                        >
                            {/*First stack navigation*/}
                            <Stack.Screen name="HOME" component={HomeScreen} options={{
                                headerLeft: () => (
                                    <Pressable onPress={() => navigation.openDrawer()} title="Open Drawer" >
                                        <Entypo name="menu" size={26} />
                                        <View style={{width:50}}/>
                                    </Pressable>
                                ),
                            }} />

                            {/*Second stack navigation*/}
                            <Stack.Screen name="Dash" component={Dashboard}/>

                        </Stack.Navigator>
                    )}
                </Drawer.Screen>

                {/*Second drawer navigation*/}
                <Drawer.Screen name="ABOUT US" component={AboutPage} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}