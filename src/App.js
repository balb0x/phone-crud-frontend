// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
// Import phone and brand resources
import { PhoneList, PhoneEdit, PhoneCreate} from "./resources/phones";
import { BrandList, BrandEdit, BrandCreate} from "./resources/brands";
// Import the dashboard
import Dashboard from './views/Dashboard';
// Import the providers
import authProvider from './providers/authProvider';
import dataProvider from './providers/dataProvider';
// Import the menu icons
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';

const App = () => (
    // The providers are passed to the admin component
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        {permissions => [
            // Add the 2 resources and its components
            <Resource name="phone" list={PhoneList} edit={PhoneEdit} create={PhoneCreate} icon={PhoneAndroidIcon}/>,
            // Only include the categories resource for admin users
            <Resource name="brand" list={permissions === 'admin' ? BrandList : null} edit={permissions === 'admin' ? BrandEdit : null} create={permissions === 'admin' ? BrandCreate : null} icon={AddToHomeScreenIcon}/>
        ]}
    </Admin>
);
export default App;