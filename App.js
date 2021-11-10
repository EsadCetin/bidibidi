import React from "react";
import "react-native-gesture-handler";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import ChatContactScreen from "./screens/ChatContactScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AddContactScreen from "./screens/AddContactScreen";
import MyProfileScreen from "./screens/MyProfileScreen";
import AboutScreen from "./screens/AboutScreen";
import HelpScreen from "./screens/HelpScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator initialRouteName={WelcomeScreen}>
			<Stack.Screen
				name="WelcomeScreen"
				options={{ headerShown: false }}
				component={WelcomeScreen}
			/>
			<Stack.Screen
				name="SignupScreen"
				options={{ headerShown: false }}
				component={SignupScreen}
			/>
			<Stack.Screen
				name="LoginScreen"
				options={{ headerShown: false }}
				component={LoginScreen}
			/>
			<Stack.Screen
				name="HomeScreen"
				options={{ headerShown: false }}
				component={HomeScreen}
			/>
			<Stack.Screen
				name="ChatScreen"
				options={{ headerShown: false }}
				component={ChatScreen}
			/>
			<Stack.Screen
				name="ChatContactScreen"
				options={{ headerShown: false }}
				component={ChatContactScreen}
			/>
			<Stack.Screen
				name="SettingsScreen"
				options={{ headerShown: false }}
				component={SettingsScreen}
			/>
			<Stack.Screen
				name="AddContactScreen"
				options={{ headerShown: false }}
				component={AddContactScreen}
			/>
			<Stack.Screen
				name="MyProfileScreen"
				options={{ headerShown: false }}
				component={MyProfileScreen}
			/>
			<Stack.Screen
				name="AboutScreen"
				options={{ headerShown: false }}
				component={AboutScreen}
			/>
			<Stack.Screen
				name="HelpScreen"
				options={{ headerShown: false }}
				component={HelpScreen}
			/>
			<Stack.Screen
				name="EditProfileScreen"
				options={{ headerShown: false }}
				component={EditProfileScreen}
			/>
		</Stack.Navigator>
	);
}

export default function App() {
	let [fontsLoaded] = useFonts({
		Yellowtail: require("./assets/fonts/Yellowtail-Regular.ttf"),
		Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
		PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
	});

	if (!fontsLoaded) {
		return (
			<View
				style={{
					flexDirection: "row",
					alignSelf: "center",
					justifyContent: "center",
					flex: 1,
				}}
			>
				<ActivityIndicator size="large" color="#50A162" />
			</View>
		);
	} else {
		return (
			<NavigationContainer>
				<MyStack />
			</NavigationContainer>
		);
	}
}
