// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PhoneList, PhoneEdit, PhoneCreate} from "./resources/phones";
import { BrandList, BrandEdit, BrandCreate} from "./resources/brands";
import Dashboard from './views/Dashboard';
import authProvider from './providers/authProvider';
import dataProvider from './providers/dataProvider';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        {permissions => [
            <Resource name="phone" list={PhoneList} edit={PhoneEdit} create={PhoneCreate} icon={PhoneAndroidIcon}/>,
            // Only include the categories resource for admin users
            <Resource name="brand" list={permissions === 'admin' ? BrandList : null} edit={permissions === 'admin' ? BrandEdit : null} create={permissions === 'admin' ? BrandCreate : null} icon={AddToHomeScreenIcon}/>
        ]}
    </Admin>
);
export default App;