// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PhoneList} from "./phones";
import { BrandList} from "./brands";
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="brand" list={BrandList} />
        <Resource name="phone" list={PhoneList} />

    </Admin>
);
export default App;