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
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../assets/styles/LoginScreenStyles";
import { auth } from "../firebase";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [modalVisible1, setModalVisible1] = useState(false);
	const [modalVisible2, setModalVisible2] = useState(false);
	const [modalVisible3, setModalVisible3] = useState(false);
	const [currentUserUid, setCurrentUserUid] = useState("");

	const Login = async () => {
		await auth
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				navigation.navigate("HomeScreen");
			})
			.catch((error) => {
				if (error.code === "auth/invalid-email") {
					setModalVisible1(true);
				} else if (error.code === "auth/user-not-found") {
					setModalVisible2(true);
				} else if (error.code === "auth/wrong-password") {
					setModalVisible3(true);
				}
			});
	};

	return (
		<DismissKeyboard>
			<KeyboardAvoidingView enabled behavior={"position"} style={styles.view}>
				<StatusBar />
				<View>
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
					<View>
						<TouchableOpacity style={styles.viewForgotPassword}>
							<Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.loginButton} onPress={() => Login()}>
						<Text style={styles.textLoginButton}>Giriş Yap</Text>
					</TouchableOpacity>
				</View>
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
							<Text style={styles.modalText}>E-posta Adresi Geçersiz</Text>
							<TouchableOpacity
								style={[styles.ReadButton]}
								onPress={() => setModalVisible1(!modalVisible1)}
							>
								<Text style={styles.textStyle}>Tamam</Text>
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
							<Text style={styles.modalText}>Kullanıcı Bulunamadı</Text>
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
							<Text style={styles.modalText}>Hatalı Şifre</Text>
							<TouchableOpacity
								style={[styles.ReadButton]}
								onPress={() => setModalVisible3(!modalVisible3)}
							>
								<Text style={styles.textStyle}>Tamam</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			</KeyboardAvoidingView>
		</DismissKeyboard>
	);
};

export default LoginScreen;
