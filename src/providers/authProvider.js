import decodeJwt from 'jwt-decode';

/**
 * authProvider.js
 *
 * It is responsible of the authentication process during the
 * user interaction on the webpage. It handles the token and
 * permissions information retrieved in the JWT message received
 * from the backend.
 *
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login: ({ username, password }) => {
        // Get the backend url from the environment file
        const apiUrl = process.env.REACT_APP_BACKEND_URL;

        // Create a new request to fetch the login endpoint on the backend
        // The credentials are sent on the request body, presented as a JSON object
        const request = new Request(apiUrl + '/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                // If there is an error, Trow an exception with the error code
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                // If login is successful, store the jwt token and the user permissions
                // on the localstorage
                const decodedToken = decodeJwt(token);
                localStorage.setItem('token', token);
                localStorage.setItem('permissions', decodedToken.permissions);
            });
    },
    checkError: ({status}) => {
        /*
        If we receive an Unauthorized or Forbidden response in any of the
        data provider requests, then force the logout of the user and it will
        be redirected to the login page
         */

        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('permissions');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        // Check if the user is currently logged in
        // TODO check if the token is expired locally
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        // Remove the token and permissions info from the localstorage
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    getIdentity: () => { /* ... */ },
    getPermissions: () => {
        // Retrieve the user permissions from the localstorage
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
};