export const UserActions = {
	LOGIN_ACTION: {
		type: "USERS/LOGIN",
		payload: null
	},
	LOGOUT_ACTION: {
		type: "USERS/LOGOUT",
		payload: null
	},
	SET_NAME_ACTION: (data) => ({
		type: "USERS/SET_NAME",
		payload: data
	})
}