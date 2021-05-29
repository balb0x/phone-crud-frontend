import * as React from "react";
import { List,
    Datagrid,
    TextField,
    BooleanField,
    NumberField,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    Create,
    TextInput,
    BooleanInput,
    NumberInput,} from 'react-admin';

export const PhoneList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField label="Brand" source="brand.name" />
            <TextField label="SO" source="so" />
            <BooleanField source="water_proof" />
            <BooleanField label="5G Support" source="h5g" />
            <NumberField label="RAM (GB)" source="ram" />

        </Datagrid>
    </List>
);

export const PhoneEdit = props => (
    <Edit {...props} mutationMode={"optimistic"}>
        <SimpleForm>
            <ReferenceInput label="Brand" source="brand.id" reference="brand">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="so" />
            <BooleanInput source="water_proof" />
            <BooleanInput label="5G Support" source="h5g" />
            <NumberInput label="RAM (GB)" source="ram" />
        </SimpleForm>
    </Edit>
);

export const PhoneCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Brand" source="brand.id" reference="brand">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="so" />
            <BooleanInput source="water_proof" />
            <BooleanInput label="5G Support" source="h5g" />
            <NumberInput label="RAM (GB)" source="ram" />
        </SimpleForm>
    </Create>
);