import * as React from "react";
import { List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput, } from 'react-admin';

export const PhoneList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField label="Brand" source="brand.name" />
        </Datagrid>
    </List>
);

export const PhoneEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="brand" reference="brand">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);