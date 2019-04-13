import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#666',
	},

	containerUser: {
		flex: 1,
		justifyContent: 'center', 
	}, 

	name: {
		fontSize: 38, 
		fontWeight: 'bold',
		color: '#ffffff',
		textAlign: 'center'
	},

	containerInput: {
		margin: 15, 
		backgroundColor: '#fff',
		borderRadius: 5,
	},

	div: {
		borderTopColor: '#ddd',
		borderTopWidth: 1
	},

	btnCadastro: {
		padding: 15,
		backgroundColor: 'rgba(255, 255, 255, 0.2)'
	},

	btnCadastroText: {
		color: '#fff', 
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});


