function(properties, context) {
    
    switch(properties.action) {
        case "Open":
            $sleek.open();
            break;
        case "Close":
            $sleek.close();
            break;
        case "Toggle":
            $sleek.toggle();
            break;
        case "Show Button":
            $sleek.showButton();
            break;
        case "Hide Button":
            $sleek.hideButton();
            break;
        case "Open New Feedback":
            $sleek.open('feedback.add');
            break;
        case "Open Changelog":
            $sleek.open('changelog');
            break;
        case "Open Notifications":
            $sleek.open('notifications');
            break;
                            }

}