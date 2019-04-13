import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ccc'
	},

	list: {
		flex: 1
	},

	containerUser: {
		flex: 1, 
		alignItems: 'flex-end'
	},

	containerRobot: {
		flex: 1, 
		alignItems: 'flex-start'
	},

	containerUserText: {
		backgroundColor: '#8dd',
		margin: 5,
		padding: 10, 
		borderRadius: 30
	},

	containerRobotText: {
		backgroundColor: '#fff',
		margin: 5, 
		padding: 10, 
		borderRadius: 30
	},

	containerInput: {
		flexDirection: 'row', 
		backgroundColor: '#fff', 
		borderRadius: 30, 
		margin: 8
	},

	input: {
		flex: 1, 
		height: 50, 
		fontSize: 12, 
		padding: 5, 
		paddingLeft: 20
	},

	icon: {
		width: 50, 
		height: 50
	}
})