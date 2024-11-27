function(properties, context) {
    
	let userData = {};
    userData.mail = properties.email;
    userData.id = properties.unique_id;
    userData.name = properties.name || null;
    userData.img = properties.image || null;
    userData.weight = properties.weight || 1;
    userData.token = window.SLEEK_USER;
    $sleek.setUser(userData);
    
}