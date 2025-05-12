
// class to manage user authentication status
class Auth {
    #isUser = false; // Private field
    #isAdmin = false; // Private field

    // Method to set user authentication status
    setUserAuthenticated(status) {
        this.#isUser = status;
    }

    // Method to set admin authentication status
    setAdminAuthenticated(status) {
        this.#isAdmin = status;
    }

    // Method to reset authentication status
    resetAuthentication() {
        this.#isUser = false;
        this.#isAdmin = false;
    }

    // Getter for isUser
    get isUser() {
        return this.#isUser;
    }

    // Getter for isAdmin
    get isAdmin() {
        return this.#isAdmin;
    }

}

export default new Auth();