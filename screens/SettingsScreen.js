import React, { useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import NavigationBottomBar from "./NavigationBottomBar";
import styles from "../assets/styles/SettingsScreenStyles";
import { auth, db } from "../firebase";

const SettingsScreen = ({ navigation }) => {
	const [name, setName] = useState("");

	const [image, setImage] = useState();
	const getUser = async () => {
		await db
			.collection("users")
			.doc(auth?.currentUser?.uid)
			.get()
			.then(function (doc) {
				if (doc.exists) {
					setName(doc.get("name"));
					setImage(doc.get("profilePhoto"));
				}
			});
	};
	getUser();
	const onSignoutPress = () => {
		auth
			.signOut()
			.then(console.log("signed out"), navigation.navigate("WelcomeScreen"));
	};

	return (
		<View style={styles.view}>
			<View style={styles.Header}>
				<Text style={styles.HeaderText}>Ayarlar</Text>
			</View>
			<Image source={{ uri: image }} style={styles.profilePhoto}></Image>
			<View>
				<View style={styles.textView}>
					<Text style={styles.text}>{name}</Text>
				</View>
			</View>
			<TouchableWithoutFeedback
				onPress={() => navigation.navigate("MyProfileScreen")}
			>
				<View style={styles.button}>
					<Image
						style={styles.tinyLogo}
						source={require("../assets/icons/profile.png")}
					/>
					<Text style={styles.buttonText}>Profilim</Text>
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback>
				<View style={styles.button}>
					<Image
						style={styles.tinyLogo}
						source={require("../assets/icons/notifications.png")}
					/>
					<Text style={styles.buttonText}>Bildirimler</Text>
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback
				onPress={() => navigation.navigate("HelpScreen")}
			>
				<View style={styles.button}>
					<Image
						style={styles.tinyLogo}
						source={require("../assets/icons/chat.png")}
					/>
					<Text style={styles.buttonText}>Yardım</Text>
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback
				onPress={() => navigation.navigate("AboutScreen")}
			>
				<View style={styles.button}>
					<Image
						style={styles.tinyLogo}
						source={require("../assets/icons/info.png")}
					/>
					<Text style={styles.buttonText}>Uygulama Hakkında</Text>
				</View>
			</TouchableWithoutFeedback>

			<View style={styles.logoutButton}>
				<TouchableWithoutFeedback onPress={() => onSignoutPress()}>
					<Text style={styles.logout}>Çıkış Yap</Text>
				</TouchableWithoutFeedback>
				<Image
					style={styles.tinyLogo}
					source={require("../assets/icons/logout.png")}
				/>
			</View>
			<View
				style={{
					backgroundColor: "#DBB364",
					position: "absolute",
					width: 35,
					height: 35,
					bottom: 3,
					right: 20,
					borderRadius: 20,
				}}
			></View>
			<NavigationBottomBar />
		</View>
	);
};

export default SettingsScreen;
