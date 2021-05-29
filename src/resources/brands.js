import * as React from "react";
import {List, Datagrid, TextField, NumberField, Edit, SimpleForm, NumberInput, TextInput, Create} from 'react-admin';

export const BrandList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="country" />
            <NumberField source="year" />
            <TextField source="ceo" />
            <NumberField source="entry" />
            <TextField source="isin" />
        </Datagrid>
    </List>
);

export const BrandEdit = props => (
    <Edit {...props} mutationMode={"optimistic"}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="country" />
            <NumberInput source="year" />
            <TextInput source="ceo" />
            <NumberInput source="entry" />
            <TextInput source="isin" />
        </SimpleForm>
    </Edit>
);

export const BrandCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="country" />
            <NumberInput source="year" />
            <TextInput source="ceo" />
            <NumberInput source="entry" />
            <TextInput source="isin" />
        </SimpleForm>
    </Create>
);