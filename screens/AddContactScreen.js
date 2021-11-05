import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../assets/styles/AddContactScreenStyles";

const AddContactScreen = () => {
	return (
		<View style={styles.view}>
			<View style={styles.Header}>
				<Text style={styles.HeaderText}>Yeni Kişi</Text>
			</View>
			<View>
				<TextInput></TextInput>
			</View>
		</View>
	);
};

export default AddContactScreen;
