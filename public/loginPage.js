'use strict'

const userForm = new UserForm();

userForm.loginFormCallback = data => {
    ApiConnector.login(data, response => {
        if (!response.success) {
            userForm.setLoginErrorMessage(response.eror);
        } else {
            location.reload();
        }
    });
}

userForm.registerFormCallback = data => {
    ApiConnector.register(data, response => {
        if (!response.success) {
            userForm.setRegisterErrorMessage(response.eror);
        } else {
            location.reload();
        }
    });
}