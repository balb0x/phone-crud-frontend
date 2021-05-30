import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

/**
 * dataProvider.js
 *
 * Responsible of the resource integration with the admin
 * component. It handles all the record information retrieved..
 *
 * All the functions use the same HTTP client, configured to pass
 * the JWT token in a Authorization header.
 *
 */

const apiUrl = process.env.REACT_APP_BACKEND_URL;

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        // Configure a simple application/json header if there are no headers present
        options.headers = new Headers({ Accept: 'application/json' });
    }

    const token = localStorage.getItem('token');
    // Pass the JWT token in th Authorization header
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getList: (resource, params) => {
        // Get lists of a given resource

        // Variables to make the pagination of the records
        const { page, perPage } = params.pagination;
        // TODO implement a filter system
        //const { field, order } = params.sort;
        const query = {
            //sort: JSON.stringify([field, order]),
            page: page,
            rows: perPage,
            //filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json.results,
            total: json.total,
        }));
    },

    getOne: (resource, params) =>
        // Get a single record of a given resource
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json.results,
        })),

    getMany: (resource, params) => {
        // Get some records of a given resource
        const query = {
            ids: params.ids.join(","),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json.results }));
    },

    getManyReference: (resource, params) => {
        // Get some records of a referenced resource
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) =>
        // Update a record of a resource
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json.results })),

    updateMany: (resource, params) => {
        // Update some records of a resource
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) =>
        // Create a record of a resource
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.results.id },
        })),

    delete: (resource, params) =>
        // Delete a record of a resource
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource, params) => {
        // Delete some records of a resource
        const query = {
            ids: params.ids.join(","),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json.results }));
    }
};