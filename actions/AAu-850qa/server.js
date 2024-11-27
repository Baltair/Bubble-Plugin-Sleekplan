async function(properties, context) {

    const jwt = require('jsonwebtoken');
    const key = context.keys["SSO Key"];
    const email = properties.user_email;
    const userData = {
        mail: email,
    }
    const result = {
        sso_token: jwt.sign(userData, key, { algorithm: 'HS256'})
    };
    return result;

}