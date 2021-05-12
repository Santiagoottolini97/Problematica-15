class LoginPage {
    get inputEmail() {
        return $(
            `form>
         div[class="form_group"]>
         input[id="user-name"]`
        );
    }
    get inputPassword() {
        return $(
            `form>
         div[class="form_group"]>
         input[id="password"]`
        );
    }
    get errorText() {
        return $(
            `form>
        div[class="error-message-container error"]>
        h3`
        ).getText();
    }
    get btnSubmit() {
        return $(
            `form>
         input[id="login-button"]`
        );
    }

    testLogin(email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
