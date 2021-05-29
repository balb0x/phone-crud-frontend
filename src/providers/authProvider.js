import decodeJwt from 'jwt-decode';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login: ({ username, password }) => {
        const apiUrl = process.env.REACT_APP_BACKEND_URL;

        const request = new Request(apiUrl + '/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                const decodedToken = decodeJwt(token);
                localStorage.setItem('token', token);
                localStorage.setItem('permissions', decodedToken.permissions);
            });
    },
    checkError: ({status}) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('permissions');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    getIdentity: () => { /* ... */ },
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
};