import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	view: {
		flex: 1,
	},
	image: { height: windowHeight / 1.1 },
	Header: {
		alignItems: "center",
		backgroundColor: "#50A162",
		height: windowHeight / 10,
		flexDirection: "row",
	},
	HeaderText: {
		alignSelf: "center",
		textAlign: "center",
		marginLeft: "2%",
		marginTop: "2%",
		fontFamily: "Poppins",
		fontSize: 25,
		color: "#DBB364",
	},
	tinyLogo: {
		marginTop: "2%",
		width: 30,
		height: 30,
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
		marginLeft: "5%",
		borderRadius: 55,
		aspectRatio: 1,
		marginTop: "6%",
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
