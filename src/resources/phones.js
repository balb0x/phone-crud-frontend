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
    NullableBooleanInput,
    NumberInput,
    required,} from 'react-admin';

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
            <ReferenceInput validate={[required()]} label="Brand" source="brand.id" reference="brand">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput validate={[required()]} source="name" />
            <TextInput validate={[required()]} source="so" />
            <NullableBooleanInput validate={[required()]} source="water_proof" />
            <NullableBooleanInput validate={[required()]} label="5G Support" source="h5g" />
            <NumberInput validate={[required()]} label="RAM (GB)" source="ram" />
        </SimpleForm>
    </Edit>
);

export const PhoneCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput validate={[required()]} label="Brand" source="brand.id" reference="brand">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput validate={[required()]} source="name" />
            <TextInput validate={[required()]} source="so" />
            <NullableBooleanInput validate={[required()]} source="water_proof" />
            <NullableBooleanInput validate={[required()]} label="5G Support" source="h5g" />
            <NumberInput validate={[required()]} label="RAM (GB)" source="ram" />
        </SimpleForm>
    </Create>
);