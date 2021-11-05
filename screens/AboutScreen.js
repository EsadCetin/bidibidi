import React from "react";
import {
	View,
	Text,
	TouchableWithoutFeedback,
	Image,
	ImageBackground,
} from "react-native";
import styles from "../assets/styles/AboutScreenStyles";

const AboutScreen = ({ navigation }) => {
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
				<Text style={styles.HeaderText}>Uygulama Hakkında</Text>
			</View>
			<View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
				<View style={styles.button}>
					<Text style={styles.buttonText}>
						Bu uygulama Selçuk Üniversitesi Teknoloji Fakültesi Bilgisayar
						Mühendisiliği bölümü 163311002 Nolu Mehmet Esad ÇETİN tarafından
						bitirme projesi amacıyla yapılmıştır.
					</Text>
				</View>
			</View>
			<ImageBackground
				source={{
					uri: "https://yt3.ggpht.com/ytc/AKedOLR5QchPiCRovwcUsJvTiRK47K2Q7qg9GBotheAX_w=s900-c-k-c0x00ffffff-no-rj",
				}}
				resizeMode="cover"
				style={styles.image}
			></ImageBackground>
		</View>
	);
};

export default AboutScreen;
