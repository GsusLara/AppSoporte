const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			saludo: "hola"
		},
		actions: {
			setSaludo: item => {
				setStore({ saludo: item });
			}
		}
	};
};

export default getState;
