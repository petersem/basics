// Sends notification with link and icon, as toast. Only works from a browser

// check if Notifications supported
if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
}

// request permission if not set
function requestNotificationPermission() {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("Notification permission granted.");
        } else {
            console.log("Notfication permission denied.");
        }
    });
}

requestNotificationPermission();

// create notification
function showNotification(title, options, link) {
    if (Notification.permission === "granted") {
        const notify = new Notification(title, options);

        if (link) {
            notify.onclick = () => {
                window.location.href = link;
            }
        }
    } else {
        console.log("Notification permission not granted.");
    }
}

// friendly function to call notification
function notify(title, body, icon, link=null) {
    showNotification(title, {
        body: body,
        icon: icon,
        vibrate: [200, 100, 200]
    },
        link
    );
}
