import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	Image,
	Modal,
	TouchableOpacity,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styles from "../assets/styles/EditProfileScreenStyles";
import { auth, db } from "../firebase";
import * as ImagePicker from "expo-image-picker";

const EditProfileScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [profilePhoto, setProfilePhoto] = useState();
	const [profilePhoto2, setProfilePhoto2] = useState();
	const [name2, setName2] = useState("");
	const [modalVisible, setModalVisible] = useState(false);

	const getUser = async () => {
		await db
			.collection("users")
			.doc(auth?.currentUser?.uid)
			.get()
			.then(function (doc) {
				if (doc.exists) {
					setName(doc.get("name"));
					setEmail(doc.get("email"));
					setProfilePhoto(doc.get("profilePhoto"));
				}
			});
	};
	getUser();
	const updateName = async () => {
		await db.collection("users").doc(auth?.currentUser?.uid).update({
			name: name2,
		});
	};
	const updatePhoto = async () => {
		await db.collection("users").doc(auth?.currentUser?.uid).update({
			name: name2,
			profilePhoto: profilePhoto2,
		});
	};
	const updated = () => {
		setModalVisible(!modalVisible);
		navigation.navigate("MyProfileScreen");
		updateName();
	};
	useEffect(() => {
		(async () => {
			if (Platform.OS !== "web") {
				const { status } =
					await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== "granted") {
					alert("Üzgünüz, fotoğraflarına erişmemize izin vermen gerekiyor!");
				}
			}
		})();
	}, []);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: false,
			aspect: [3, 3],
			quality: 1,
		});

		if (!result.cancelled) {
			setProfilePhoto2(result.uri);
			updatePhoto();
		}
	};
	console.log({ profilePhoto });
	console.log({ name });
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
				<Text style={styles.HeaderText}>Bilgileri Düzenle</Text>
			</View>
			<Image source={{ uri: profilePhoto }} style={styles.profilePhoto}></Image>
			<View style={styles.iconView}>
				<TouchableWithoutFeedback onPress={() => pickImage()}>
					<Image
						source={require("../assets/icons/edit.png")}
						style={styles.editIcon}
					></Image>
				</TouchableWithoutFeedback>
			</View>

			<View style={styles.textView}>
				<TextInput
					style={styles.text}
					placeholder={name}
					onChangeText={(text) => setName2(text)}
				></TextInput>
			</View>
			<View style={styles.textView}>
				<Text style={styles.text}>{email}</Text>
			</View>
			<View>
				<TouchableWithoutFeedback
					style={styles.updateButton}
					onPress={() => setModalVisible(!modalVisible)}
				>
					<Text style={styles.textUpdateButton}>Güncelle</Text>
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
						<Text style={styles.modalText}>Güncelleme Başarılı!</Text>
						<TouchableOpacity
							style={[styles.modalButton]}
							onPress={() => updated()}
						>
							<Text style={styles.textStyle}>Devam Et!</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default EditProfileScreen;
