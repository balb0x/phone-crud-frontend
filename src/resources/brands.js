import * as React from "react";
import {List, Datagrid, TextField, NumberField, Edit, SimpleForm, NumberInput, TextInput, Create, required } from 'react-admin';

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
            <TextInput validate={[required()]} source="name" />
            <TextInput validate={[required()]} source="country" />
            <NumberInput validate={[required()]} source="year" />
            <TextInput validate={[required()]} label="CEO" source="ceo" />
            <NumberInput validate={[required()]} label="Income ($)" source="entry" />
            <TextInput validate={[required()]} label="ISIN" source="isin" />
        </SimpleForm>
    </Edit>
);

export const BrandCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput validate={[required()]} source="name" />
            <TextInput validate={[required()]} source="country" />
            <NumberInput validate={[required()]} source="year" />
            <TextInput validate={[required()]} label="CEO" source="ceo" />
            <NumberInput validate={[required()]} label="Income ($)" source="entry" />
            <TextInput validate={[required()]} label="ISIN" source="isin" />
        </SimpleForm>
    </Create>
);