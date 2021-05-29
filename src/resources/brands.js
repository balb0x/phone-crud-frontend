import * as React from "react";
import {List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create} from 'react-admin';

export const BrandList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
        </Datagrid>
    </List>
);

export const BrandEdit = props => (
    <Edit {...props} mutationMode={"optimistic"}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const BrandCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);