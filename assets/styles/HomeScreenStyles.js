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
	HeaderText: {
		textAlign: "center",
		width: "60%",
		alignSelf: "center",
		fontFamily: "Yellowtail",
		fontSize: 45,
		color: "#DBB364",
	},
	tinyLogo: {
		width: 30,
		height: 30,
		marginTop: "1%",
	},
	tinyLogoFavorites: {
		width: 20,
		height: 20,
	},

	tinyBorderLogo: {
		top: 5,
		width: 35,
		height: 35,
	},
	Chat: {
		flexDirection: "row",
		width: windowWidth / 1,
		height: windowHeight / 9,
		alignSelf: "center",
		borderBottomWidth: 1,
	},
	ChatPhoto: {
		borderRadius: 55,
		marginTop: "3%",
		marginLeft: "4%",
		width: "15%",
		height: "70%",
	},
	Avatar: {
		marginTop: windowHeight / 30,
		alignSelf: "center",
		borderWidth: 3,
		borderColor: "grey",
	},
	ChatName: {
		marginLeft: "6%",
		marginTop: "3%",
		fontSize: 18,
		fontFamily: "Poppins",
	},
	ChatTime: {
		position: "absolute",
		right: "9%",
		bottom: "5%",
		fontSize: 14,
		fontFamily: "Poppins",
	},
	ChatMessage: {
		position: "absolute",
		left: "25%",
		top: "40%",
		fontSize: 12,
		fontFamily: "Poppins",
		color: "black",
	},

	BottomBar: {
		position: "absolute",
		bottom: 0,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		height: "6%",
		borderTopWidth: 1,
	},
});
