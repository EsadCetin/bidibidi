import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	Modal,
	Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../assets/styles/SignupScreenStyles";
import { auth, db } from "../firebase";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

const SignupScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [modalVisible1, setModalVisible1] = useState(false);
	const [modalVisible2, setModalVisible2] = useState(false);
	const [modalVisible3, setModalVisible3] = useState(false);
	const [modalVisible4, setModalVisible4] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const Signup = async () => {
		await auth
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				setModalVisible1(true);
				saveUser();
			})
			.catch((error) => {
				if (error.code === "auth/invalid-email") {
					setModalVisible2(true);
				} else if (error.code === "auth/email-already-in-use") {
					setModalVisible3(true);
				} else if (error.code === "auth/weak-password") {
					setModalVisible4(true);
				}
			});
	};
	const saveUser = async () => {
		await db.collection("users").doc(auth?.currentUser?.uid).set({
			email: email,
			name: name,
			userUid: auth.currentUser.uid,
			profilePhoto:
				"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",
		});
	};
	return (
		<DismissKeyboard>
			<KeyboardAvoidingView enabled behavior={"position"} style={styles.view}>
				<StatusBar />
				<View style={styles.viewName}>
					<Text style={styles.textTorba}>BıdıBıdı</Text>
					<Text style={styles.textSlogan}>Çekinme, yaz!</Text>
				</View>
				<View style={styles.componentsView}>
					<View style={styles.inputViewEmail}>
						<TextInput
							placeholder={"E-posta"}
							placeholderTextColor={"white"}
							selectionColor={"white"}
							selectionColor={"#50A162"}
							keyboardType="email-address"
							style={styles.inputEmail}
							onChangeText={(text) => setEmail(text)}
						></TextInput>
					</View>
					<View style={styles.inputViewPassword}>
						<TextInput
							placeholder={"Şifre"}
							secureTextEntry={true}
							maxLength={16}
							placeholderTextColor={"white"}
							selectionColor={"#50A162"}
							style={styles.inputPassword}
							onChangeText={(text) => setPassword(text)}
						></TextInput>
					</View>
					<View style={styles.inputViewUsername}>
						<TextInput
							placeholder={"Adın"}
							maxLength={16}
							placeholderTextColor={"white"}
							selectionColor={"#50A162"}
							style={styles.inputUsername}
							onChangeText={(text) => setName(text)}
						></TextInput>
					</View>

					<View style={{ alignSelf: "center", alignItems: "center" }}>
						<TouchableOpacity onPress={() => setModalVisible(true)}>
							<Text style={styles.textTerm}>Kullanım Hüküm ve Koşulları</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={styles.signupButton}
						onPress={() => Signup()}
					>
						<Text style={styles.textSignupButton}>Kaydol</Text>
					</TouchableOpacity>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => setModalVisible(!modalVisible)}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={styles.modalText}>
									Yazdığınız mesajlardan BıdıBıdı sorumlu değildir.
								</Text>
								<TouchableOpacity
									style={[styles.ReadButton]}
									onPress={() => setModalVisible(!modalVisible)}
								>
									<Text style={styles.textStyle}>Okudum, onaylıyorum.</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible1}
						onRequestClose={() => {
							setModalVisible1(!modalVisible1);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={styles.modalText}>
									Kayıt başarılı, mesajlaşmaya başlayabilirsin!
								</Text>
								<TouchableOpacity
									style={[styles.ReadButton]}
									onPress={() => {
										setModalVisible1(!modalVisible1);
										navigation.navigate("HomeScreen");
									}}
								>
									<Text style={styles.textStyle}>Devam</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible2}
						onRequestClose={() => {
							setModalVisible2(!modalVisible2);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={styles.modalText}>E-posta Adresi Geçersiz</Text>
								<TouchableOpacity
									style={[styles.ReadButton]}
									onPress={() => setModalVisible2(!modalVisible2)}
								>
									<Text style={styles.textStyle}>Tamam</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible3}
						onRequestClose={() => {
							setModalVisible3(!modalVisible3);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={styles.modalText}>
									E-posta adresi zaten kullanılıyor
								</Text>
								<TouchableOpacity
									style={[styles.ReadButton]}
									onPress={() => setModalVisible3(!modalVisible3)}
								>
									<Text style={styles.textStyle}>Tamam</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible4}
						onRequestClose={() => {
							setModalVisible4(!modalVisible4);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={styles.modalText}>Zayıf Şifre</Text>
								<TouchableOpacity
									style={[styles.ReadButton]}
									onPress={() => setModalVisible4(!modalVisible4)}
								>
									<Text style={styles.textStyle}>Tamam</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
				</View>
			</KeyboardAvoidingView>
		</DismissKeyboard>
	);
};

export default SignupScreen;
