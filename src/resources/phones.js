import * as React from "react";
import { List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    Create,
    TextInput, } from 'react-admin';

export const PhoneList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField label="Brand" source="brand.name" />
        </Datagrid>
    </List>
);

export const PhoneEdit = props => (
    <Edit {...props} mutationMode={"optimistic"}>
        <SimpleForm>
            <ReferenceInput source="brand.id" reference="brand">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const PhoneCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="brand.id" reference="brand">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);