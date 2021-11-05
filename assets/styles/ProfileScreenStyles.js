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
	tinyBorderLogo: {
		top: 5,
		width: 35,
		height: 35,
	},
	Name: {
		alignSelf: "center",
		fontFamily: "PoppinsMedium",
		marginTop: windowHeight / 60,
		fontSize: 25,
	},
	Avatar: {
		marginTop: windowHeight / 30,
		alignSelf: "center",
		borderWidth: 3,
		borderColor: "grey",
	},
	ButtonBar: {
		borderTopWidth: 1,
		borderTopColor: "grey",
		alignSelf: "center",
		flexDirection: "column",
		justifyContent: "center",
		width: windowWidth / 1.2,
		height: windowWidth / 5,
	},
	ButtonText: {
		marginLeft: 15,
		fontSize: 23,
		fontFamily: "PoppinsMedium",
		color: "black",
	},
	Button: {
		flexDirection: "row",
	},
	LogOut: {
		borderWidth: 2,
		borderColor: "black",
		borderRadius: 18,
		alignSelf: "center",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		width: windowWidth / 1.2,
		height: windowWidth / 7,
		marginBottom: 15,
	},
	LogOutText: {
		marginLeft: "2%",
		fontSize: 23,
		fontFamily: "PoppinsMedium",
		color: "black",
	},
	BottomBar: {
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		height: "6%",
		borderTopWidth: 1,
	},
});
