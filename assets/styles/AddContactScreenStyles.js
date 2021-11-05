import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	view: {
		flex: 1,
	},
	image: { height: windowHeight / 1.1 },
	Header: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#50A162",
		height: windowHeight / 10,
		flexDirection: "row",
	},
	HeaderText: {
		textAlign: "center",
		width: "60%",
		textAlign: "center",
		fontFamily: "Yellowtail",
		fontSize: 45,
		color: "#DBB364",
	},
	tinyLogo: {
		marginLeft: "2%",
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
	ChatPhoto: {
		marginLeft: "5%",
		borderRadius: 55,
		aspectRatio: 1,
		marginTop: "6%",
		width: "15%",
		height: "15%",
		alignSelf: "center",
	},
});
