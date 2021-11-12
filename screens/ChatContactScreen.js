import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from "../assets/styles/ChatContactScreenStyles";
import { auth, db } from "../firebase";

const ChatContactScreen = ({ route, navigation }) => {
	const { image, name } = route.params;
	const [email, setEmail] = useState("");

	const getEmail = async () => {
		await db
			.collection("users")
			.where("name", "==", name)
			.get()
			.then((snap) => {
				snap.forEach((doc) => {
					console.log(doc.data());
					setEmail(doc.get("email"));
				});
			});
	};
	getEmail();

	return (
		<View style={styles.view}>
			<View style={styles.Header}>
				<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
					<Image
						style={styles.tinyLogo}
						source={require("../assets/icons/back.png")}
					/>
				</TouchableWithoutFeedback>
				<Text style={styles.HeaderText}>{name}</Text>
			</View>
			<Image
				style={styles.ChatPhoto}
				source={{
					uri: image,
				}}
			/>
			<Text
				style={{
					fontSize: 25,
					fontFamily: "Poppins",
					backgroundColor: "grey",
					textAlign: "center",
					width: "80%",
					alignSelf: "center",
					marginTop: "5%",
					borderRadius: 35,
				}}
			>
				{email}
			</Text>
		</View>
	);
};

export default ChatContactScreen;
