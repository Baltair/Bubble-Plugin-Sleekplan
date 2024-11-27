function(properties, context) {
    const sso_token = properties.sso_token
    window.SLEEK_USER = {
        token: sso_token, 
    }
    $sleek.setUser({token: window.SLEEK_USER.token});
}