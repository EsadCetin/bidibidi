import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	view: {
		backgroundColor: "#fff",
		flex: 1,
	},
	Header: {
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
	tinyLogo: {
		width: 30,
		height: 30,
		marginTop: "1%",
	},
});
