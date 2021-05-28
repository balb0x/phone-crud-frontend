// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PhoneList, PhoneEdit} from "./resources/phones";
import { BrandList} from "./resources/brands";
import Dashboard from './Dashboard';
import authProvider from './providers/authProvider';
import dataProvider from './providers/dataProvider';

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="brand" list={BrandList} />
        <Resource name="phone" list={PhoneList} edit={PhoneEdit} />

    </Admin>
);
export default App;