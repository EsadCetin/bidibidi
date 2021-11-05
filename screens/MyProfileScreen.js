import React, { useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import NavigationBottomBar from "./NavigationBottomBar";
import styles from "../assets/styles/MyProfileScreenStyles";
import { auth, db } from "../firebase";

const MyProfileScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
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
					setEmail(doc.get("email"));
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
				<View>
					<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
						<Image
							style={styles.backLogo}
							source={require("../assets/icons/back.png")}
						/>
					</TouchableWithoutFeedback>
				</View>
				<Text style={styles.HeaderText}>Profilim</Text>
			</View>
			<Image source={{ uri: image }} style={styles.profilePhoto}></Image>
			<View>
				<Text style={{ fontSize: 18, marginLeft: "8%" }}>Adı</Text>
				<View style={styles.textView}>
					<Text style={styles.text}>{name}</Text>
				</View>
				<Text style={{ fontSize: 18, marginLeft: "8%" }}>E-mail Adresi</Text>
				<View style={styles.textView}>
					<Text style={styles.text}>{email}</Text>
				</View>
			</View>
			<View style={styles.editButton}>
				<TouchableWithoutFeedback>
					<Text style={styles.edit}>Bilgileri Düzenle</Text>
				</TouchableWithoutFeedback>
				<Image
					style={styles.tinyLogo}
					source={require("../assets/icons/editChats.png")}
				/>
			</View>
			<View style={styles.logoutButton}>
				<TouchableWithoutFeedback onPress={() => onSignoutPress()}>
					<Text style={styles.logout}>Çıkış Yap</Text>
				</TouchableWithoutFeedback>
				<Image
					style={styles.tinyLogo}
					source={require("../assets/icons/logout.png")}
				/>
			</View>
		</View>
	);
};

export default MyProfileScreen;
