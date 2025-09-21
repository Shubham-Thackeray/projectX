import { USERDATA } from "./action"

const initState = {
    userData:{}
}

const userDataReducer = (store = initState, action) => {
    try {
        switch (action.type) {
            case USERDATA:
                return {
                    ...store,
                    userData: {
                        id: 1,
                        name: "John Doe",
                        email: "john.doe@example.com",
                        roles: ["admin", "editor"]
                    }
                }
            default:
                return store; // Ensure the default case returns the unmodified store
        }
    } catch (error) {
        console.error("Error in userDataReducer:", error);
        return store; // Return the current state in case of an error
    }
}

export default userDataReducer