let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
        case 'lnn-art-app-client.herokuapp.com':
            APIURL = 'https://lnn-art-app.herokuapp.com'
}

export default APIURL;