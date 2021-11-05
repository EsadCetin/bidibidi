import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	Image,
	StatusBar,
	Dimensions,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	ImageBackground,
	FlatList,
	Alert,
	SafeAreaView,
} from "react-native";
import firebase from "firebase";
import styles from "../assets/styles/ChatScreenStyles.js";
import { auth, db } from "../firebase.js";
import { Header } from "@react-navigation/stack";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);
const ChatScreen = ({ navigation, route }) => {
	const { image, name } = route.params.item;
	const [getChats, setGetChats] = useState([]);
	const [sendChats, setSendChats] = useState([]);
	const [sendMessage, setSendMessage] = useState("");

	const getDATA = getChats.map(({ id, data: { message, time } }) => {
		return {
			key: id,
			message: message,
			time: time.substring(0, 5),
		};
	});
	const sendDATA = sendChats.map(({ id, data: { message, time } }) => {
		return {
			key: id,
			message: message,
			time: time.substring(0, 5),
		};
	});

	const sendMessageFunc = async () => {
		if (sendMessage == "") {
		} else {
			await db.collection("chats").doc(new Date().toTimeString()).set({
				message: sendMessage,
				ownerUid: auth?.currentUser?.uid,
				time: new Date().toTimeString(),
			});
			setSendMessage("");
		}
	};

	useEffect(() => {
		const subscriber = db
			.collection("chats")
			.where("ownerUid", "!=", auth?.currentUser?.uid)
			.onSnapshot((snapshot) =>
				setGetChats(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);

		return subscriber;
	}, []);
	useEffect(() => {
		const subscriber = db
			.collection("chats")
			.where("ownerUid", "==", auth?.currentUser?.uid)
			.onSnapshot((snapshot) =>
				setSendChats(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);

		return subscriber;
	}, []);
	console.log("sa");

	return (
		<SafeAreaView
			style={{
				flex: 1,
				flexDirection: "column",
				backgroundColor: "black",
			}}
		>
			<TouchableWithoutFeedback
				onPress={() =>
					navigation.navigate("ChatContactScreen", { name: name, image: image })
				}
			>
				<View style={styles.Header}>
					<View
						style={{
							marginLeft: "3%",
							width: "7%",
						}}
					>
						<View>
							<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
								<Image
									style={styles.tinyLogo}
									source={require("../assets/icons/back.png")}
								/>
							</TouchableWithoutFeedback>
						</View>
					</View>

					<View
						style={{
							marginLeft: "3%",
							width: "15%",
						}}
					>
						<Image
							style={styles.ChatPhoto}
							source={{
								uri: image,
							}}
						/>
					</View>

					<Text style={styles.HeaderText}>{name}</Text>
				</View>
			</TouchableWithoutFeedback>
			<View
				style={{
					height: "84%",
				}}
			>
				<FlatList
					data={getDATA}
					style={{ backgroundColor: "blue" }}
					renderItem={({ item }) => (
						<View
							style={{
								marginBottom: "5%",
								marginLeft: "5%",
								backgroundColor: "lightblue",
								alignSelf: "flex-start",
								maxWidth: "80%",
								padding: 8,
							}}
						>
							<Text>{item.message}</Text>
							<Text style={{ fontSize: 10, alignSelf: "flex-start" }}>
								{item.time}
							</Text>
						</View>
					)}
				/>
				<FlatList
					data={sendDATA}
					style={{ backgroundColor: "green" }}
					renderItem={({ item }) => (
						<View
							style={{
								marginBottom: "5%",
								marginRight: "5%",
								backgroundColor: "lightgreen",
								alignSelf: "flex-end",
								maxWidth: "80%",
								padding: 8,
							}}
						>
							<Text>{item.message}</Text>
							<Text style={{ fontSize: 10, alignSelf: "flex-end" }}>
								{item.time}
							</Text>
						</View>
					)}
				/>
			</View>
			<View
				style={{
					position: "absolute",
					bottom: "0%",
					backgroundColor: "#fff",
					height: windowHeight / 17,
					width: "100%",
					borderTopWidth: 2,
					flexDirection: "row",
				}}
			>
				<View style={{ width: "8%", marginTop: "2%", marginLeft: "2%" }}>
					<TouchableOpacity>
						<Image
							style={{
								width: 30,
								height: 30,
							}}
							source={require("../assets/icons/add.png")}
						/>
					</TouchableOpacity>
				</View>
				<TextInput
					style={{
						height: "80%",
						marginTop: "1.3%",
						borderRadius: 55,
						width: "75%",
						marginLeft: "3%",
						borderWidth: 2,
						fontSize: 15,
						fontFamily: "Poppins",
						paddingLeft: 10,
					}}
					value={sendMessage}
					placeholder={"Bir şeyler yazın"}
					onChangeText={(text) => setSendMessage(text)}
				></TextInput>
				<View style={{ width: "8%", marginTop: "2%", marginLeft: "2%" }}>
					<TouchableOpacity onPress={sendMessageFunc}>
						<Image
							style={{
								width: 30,
								height: 30,
							}}
							source={require("../assets/icons/send.png")}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default ChatScreen;
