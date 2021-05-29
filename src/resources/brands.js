import * as React from "react";
import {List, Datagrid, TextField, NumberField, Edit, SimpleForm, NumberInput, TextInput, Create} from 'react-admin';

export const BrandList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="country" />
            <NumberField source="year" />
            <TextField label="CEO" source="ceo" />
            <NumberField label="Income ($)" source="entry" />
            <TextField label="ISIN" source="isin" />
        </Datagrid>
    </List>
);

export const BrandEdit = props => (
    <Edit {...props} mutationMode={"optimistic"}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="country" />
            <NumberInput source="year" />
            <TextInput label="CEO" source="ceo" />
            <NumberInput label="Income ($)" source="entry" />
            <TextInput label="ISIN" source="isin" />
        </SimpleForm>
    </Edit>
);

export const BrandCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="country" />
            <NumberInput source="year" />
            <TextInput label="CEO" source="ceo" />
            <NumberInput label="Income ($)" source="entry" />
            <TextInput label="ISIN" source="isin" />
        </SimpleForm>
    </Create>
);