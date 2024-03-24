 const validateUserLogin = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Username is Required.';
    } else if (values.username.length < 6) {
        errors.username = 'Username must be at least 6 characters long.';
    } else if (values.username.length > 15) {
        errors.username = 'Username must be 15 characters or less.';
    }

    if (!values.password) {
        errors.password = 'Password is Required.';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long.'
    }

    return validateUserLogin;
}
export default validateUserLogin;