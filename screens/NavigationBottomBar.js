import React from "react";
import {
	View,
	Text,
	TouchableWithoutFeedbackeedback,
	Image,
	TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../assets/styles/NavigationBottomBarStyles";

const NavigationBottomBar = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.BottomBar}>
			<TouchableWithoutFeedback
				style={{ marginLeft: "5%" }}
				onPress={() => navigation.navigate("HomeScreen")}
			>
				<Image
					style={styles.tinyBorderLogo}
					source={require("../assets/icons/home.png")}
				/>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback>
				<Image
					style={styles.tinyBorderLogo}
					source={require("../assets/icons/search.png")}
				/>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback
				onPress={() => navigation.navigate("AddContactScreen")}
			>
				<Image
					style={{
						width: 54,
						height: 54,
						bottom: 20,
						alignSelf: "center",
					}}
					source={require("../assets/icons/add.png")}
				/>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback>
				<Image
					style={styles.tinyBorderLogo}
					source={require("../assets/icons/chat.png")}
				/>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback
				style={{ marginRight: "5%" }}
				onPress={() => navigation.navigate("SettingsScreen")}
			>
				<Image
					style={styles.tinyBorderLogo}
					source={require("../assets/icons/settings.png")}
				/>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default NavigationBottomBar;
