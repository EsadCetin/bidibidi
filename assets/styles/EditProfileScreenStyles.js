import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	view: {
		backgroundColor: "#fff",
		flex: 1,
	},
	Header: {
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "#50A162",
		height: windowHeight / 10,
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
	},
	HeaderText: {
		textAlign: "center",
		width: "60%",
		alignSelf: "center",
		fontFamily: "Yellowtail",
		fontSize: 30,
		color: "#DBB364",
	},
	Text: {
		marginTop: "5%",
		fontSize: 25,
		marginLeft: "5%",
	},
	Avatar: {
		marginTop: windowHeight / 45,
		marginBottom: windowHeight / 45,
		alignSelf: "center",
	},
	tinyLogo: {
		width: 30,
		height: 30,
	},
	Bar: {
		height: windowHeight / 10,
		width: "90%",
		backgroundColor: "#DBB364",
		borderRadius: 15,
		alignSelf: "center",
		marginBottom: "6%",
	},
	updateButton: {
		marginTop: "5%",
		width: "40%",
		height: windowHeight / 12,
		backgroundColor: "#DBB364",
		borderRadius: 10,
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
	},
	textUpdateButton: {
		fontFamily: "Poppins",
		fontSize: windowWidth / 22,
		color: "white",
	},
});
