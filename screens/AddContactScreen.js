import React, { useState } from "react";
import { Modal } from "react-native";
import {
	View,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	Image,
} from "react-native";
import { ResizeTextMode } from "react-native-auto-size-text";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../assets/styles/AddContactScreenStyles";
import { auth, db } from "../firebase";

const AddContactScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [profilePhoto, setProfilePhoto] = useState(
		"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
	);
	const [modalVisible, setModalVisible] = useState(false);

	const getUser = async () => {
		await db
			.collection("users")
			.where("email", "==", email)
			.get()
			.then((snap) => {
				snap.forEach((doc) => {
					console.log(doc.data());
					setEmail(doc.get("email"));
					setName(doc.get("name"));
					setProfilePhoto(doc.get("profilePhoto"));
				});
			});
		console.log({ email });
	};

	const addContact = async () => {
		await db.collection("contacts").doc().set({
			ownerUid: auth.currentUser.uid,
			profilePhoto: profilePhoto,
			userName: name,
		});
	};
	const add = () => {
		getUser();
		setModalVisible(!modalVisible);
	};

	const added = () => {
		addContact();
		setModalVisible(!modalVisible);
		navigation.goBack();
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
				<Text style={styles.HeaderText}>Yeni Kişi</Text>
			</View>
			<View style={styles.textView}>
				<TextInput
					style={styles.text}
					keyboardType="email-address"
					numberOfLines={1}
					mode={ResizeTextMode.max_lines}
					placeholder="Eklemek istediğiniz kişinin mail adresini giriniz"
					onChangeText={(text) => setEmail(text)}
					selectionColor={"#50A162"}
				></TextInput>
			</View>
			<View style={styles.updateButton}>
				<TouchableWithoutFeedback onPress={() => add()}>
					<Text style={styles.textUpdateButton}>Ekle</Text>
				</TouchableWithoutFeedback>
			</View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Kişi Eklendi!</Text>
						<View style={styles.modalButton}>
							<TouchableWithoutFeedback onPress={() => added()}>
								<Text style={styles.textStyle}>Devam Et!</Text>
							</TouchableWithoutFeedback>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default AddContactScreen;
