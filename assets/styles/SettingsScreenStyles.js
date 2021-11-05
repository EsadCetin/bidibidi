import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	view: {
		backgroundColor: "#fff",
		flex: 1,
	},
	Header: {
		width: windowWidth,
		justifyContent: "center",
		backgroundColor: "#50A162",
		height: windowHeight / 10,
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
	},
	backLogo: {
		marginTop: "5%",
		marginLeft: "10%",
		justifyContent: "center",
		width: 30,
		height: 30,
	},
	HeaderText: {
		textAlign: "center",
		width: "60%",
		alignSelf: "center",
		fontFamily: "Yellowtail",
		fontSize: 45,
		color: "#DBB364",
	},
	profilePhoto: {
		alignSelf: "center",
		marginTop: "5%",
		width: windowWidth / 2.7,
		height: windowHeight / 5.5,
		borderRadius: 75,
		borderWidth: 2,
		borderColor: "#DBB364",
	},
	text: {
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: 25,
		marginLeft: "5%",
	},
	textView: {
		backgroundColor: "#DBB364",
		marginTop: "3%",
		justifyContent: "center",
		alignSelf: "center",
		width: windowWidth / 3,
		height: windowHeight / 15,
		borderRadius: 10,
	},
	logoutButton: {
		backgroundColor: "#DBB364",
		width: windowWidth / 2.7,
		height: windowHeight / 15,
		alignSelf: "center",
		alignItems: "center",
		borderRadius: 35,
		justifyContent: "center",
		position: "absolute",
		bottom: windowHeight / 9,
		flexDirection: "row",
	},
	button: {
		backgroundColor: "#DBB364",
		width: windowWidth / 1.3,
		height: windowHeight / 15,
		alignSelf: "center",
		alignItems: "center",
		borderRadius: 10,
		marginTop: windowHeight / 35,
		flexDirection: "row",
	},
	logout: {
		marginLeft: "5%",
		color: "black",
		fontFamily: "Poppins",
		fontSize: 20,
	},
	buttonText: {
		marginLeft: "1%",
		color: "black",
		fontFamily: "Poppins",
		fontSize: 20,
	},
	tinyLogo: {
		marginLeft: "2%",
		width: 25,
		height: 25,
	},
});