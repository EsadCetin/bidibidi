import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";
import styles from "../assets/styles/HelpScreenStyles";

const HelpScreen = ({ navigation }) => {
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
				<Text style={styles.HeaderText}>Yardım</Text>
			</View>

			<View style={styles.button}>
				<Image
					style={styles.tinyLogo}
					source={require("../assets/icons/phone.png")}
				/>
				<Text style={styles.buttonText}>0507 907 4709</Text>
			</View>
			<View style={styles.button}>
				<Image
					style={styles.tinyLogo}
					source={require("../assets/icons/mail.png")}
				/>
				<AutoSizeText
					style={styles.buttonText}
					fontSize={25}
					numberOfLines={1}
					mode={ResizeTextMode.max_lines}
				>
					mehmetesadcetin@gmail.com
				</AutoSizeText>
			</View>
			<View style={styles.button}>
				<Image
					style={styles.tinyLogo}
					source={require("../assets/icons/twitter_black.png")}
				/>
				<Text style={styles.buttonText}>esadcetiin</Text>
			</View>
			<View style={styles.button}>
				<Image
					style={styles.tinyLogo}
					source={require("../assets/icons/instagram_black.png")}
				/>
				<Text style={styles.buttonText}>esadcetiin</Text>
			</View>

			<Text style={styles.text}>
				Uygulama ile ilgili herhangi bir sorun yaşadığınızda yukarıdaki iletişim
				seçeneklerinden iletişime geçebilirsiniz.
			</Text>
		</View>
	);
};

export default HelpScreen;
