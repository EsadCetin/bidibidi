import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Modal,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import styles from "../assets/styles/WelcomeScreenStyles";
import { auth } from "../firebase";

const WelcomeScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace("HomeScreen");
			}
		});
		return unsubscribe;
	}, []);

	return (
		<View style={styles.view}>
			<StatusBar />
			<View>
				<Text style={styles.textTorba}>BıdıBıdı</Text>
				<Text style={styles.textSlogan}>Çekinme, yaz!</Text>
			</View>
			<View style={styles.viewKaydol}>
				<TouchableOpacity
					style={styles.buttonKaydol}
					onPress={() => navigation.navigate("SignupScreen")}
				>
					<Text style={styles.textKaydol}>Kaydol</Text>
				</TouchableOpacity>
				<View style={styles.viewHaveAnAcc}>
					<Text style={styles.textHaveAnAcc}>Zaten bir hesabın var mı?</Text>
					<TouchableOpacity style={styles.buttonLogin}>
						<Text
							onPress={() => navigation.navigate("LoginScreen")}
							style={styles.textLogin}
						>
							Giriş Yap.
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.viewSocialSignUps}>
				<TouchableOpacity style={styles.buttonSocialFacebook}>
					<Image
						style={styles.tinyLogo}
						source={require("../assets/icons/facebook.png")}
					/>
					<Text style={styles.textSocialFacebook}>Facebook ile giriş yap</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonSocialGoogle}>
					<Image
						style={styles.tinyLogo}
						style={{ marginLeft: "-1%" }}
						source={require("../assets/icons/google.png")}
					/>
					<Text style={styles.textSocialGoogle}>Google ile giriş yap</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonSocialApple}>
					<Image
						style={styles.tinyLogo}
						style={{ marginLeft: "-2%" }}
						source={require("../assets/icons/apple.png")}
					/>
					<Text style={styles.textSocialApple}>Apple ID ile giriş yap</Text>
				</TouchableOpacity>
			</View>
			<View style={{ alignSelf: "center", alignItems: "center" }}>
				<TouchableOpacity onPress={() => setModalVisible(true)}>
					<Text style={styles.textTerm}>Kullanım Hüküm ve Koşulları</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.viewOurSocials}>
				<Text style={styles.textOurSocials}>Sosyal medyada BıdıBıdı</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<TouchableOpacity style={{ alignSelf: "center", marginTop: "2%" }}>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/instagram.png")}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={{ marginStart: "20%", marginTop: "2%" }}>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/twitter.png")}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
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
		</View>
	);
};

export default WelcomeScreen;
