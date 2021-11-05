import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { auth, db } from "../firebase";
import styles from "../assets/styles/HomeScreenStyles";
import { StatusBar } from "expo-status-bar";
import NavigationBottomBar from "./NavigationBottomBar";

const HomeScreen = ({ navigation }) => {
	const [contacts, setContacts] = useState([]);

	const DATA = contacts.map(({ id, data: { profilePhoto, userName } }) => {
		return {
			key: id,
			image: profilePhoto,
			name: userName,
		};
	});

	useEffect(() => {
		const subscriber = db
			.collection("contacts")
			.where("ownerUid", "==", auth?.currentUser?.uid)
			.onSnapshot((snapshot) =>
				setContacts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);

		return subscriber;
	}, []);

	return (
		<SafeAreaView style={styles.view}>
			<View style={styles.Header}>
				<Text style={styles.HeaderText}>BıdıBıdı</Text>
			</View>
			<FlatList
				data={DATA}
				renderItem={({ item }) => (
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("ChatScreen", { item })}
						>
							<View style={styles.Chat}>
								<Image
									style={styles.ChatPhoto}
									source={{
										uri: item.image,
									}}
								></Image>
								<Text style={styles.ChatName}>{item.name}</Text>
							</View>
							<Text style={styles.ChatMessage}>{item.message}</Text>
							<Text style={styles.ChatTime}>
								<Image
									style={{ width: 15, height: 15 }}
									source={require("../assets/icons/time.png")}
								></Image>
								{item.time}
							</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
			<View
				style={{
					backgroundColor: "#DBB364",
					position: "absolute",
					width: 35,
					height: 35,
					bottom: 3,
					left: 20,
					borderRadius: 20,
				}}
			></View>
			<NavigationBottomBar />
		</SafeAreaView>
	);
};

export default HomeScreen;
