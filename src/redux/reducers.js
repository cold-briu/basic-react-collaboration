const handleLogin = (state, action) => {
	console.log("from reducer", action);
	return { ...state, auth: true }
}

const handleLogout = (state, action) => {
	console.log("from reducer", action);
	return { ...state, auth: false }
}

const handleSetName = (state, action) => {
	console.log("from reducer", action);
	return { ...state, name: action.payload }
}



export const userReducer = (state, action) => {
	switch (action.type) {
		case "USERS/LOGIN":
			return handleLogin(state, action)

		case "USERS/LOGOUT":
			return handleLogout(state, action)

		case "USERS/SET_NAME":
			return handleSetName(state, action)

		default:

			return { auth: false, name: "no_name" }
	}

}