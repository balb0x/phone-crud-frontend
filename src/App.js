// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PhoneList, PhoneEdit, PhoneCreate} from "./resources/phones";
import { BrandList, BrandEdit, BrandCreate} from "./resources/brands";
import Dashboard from './views/Dashboard';
import authProvider from './providers/authProvider';
import dataProvider from './providers/dataProvider';

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        {permissions => [
            <Resource name="phone" list={PhoneList} edit={PhoneEdit} create={PhoneCreate}/>,
            // Only include the categories resource for admin users
            permissions === 'admin'
                ? <Resource name="brand" list={BrandList} edit={BrandEdit} create={BrandCreate}/>
                : null,
        ]}
    </Admin>
);
export default App;