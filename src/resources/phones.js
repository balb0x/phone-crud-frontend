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

/**
 * phones.js
 *
 * Resource to view/edit/create the phone model. It contains
 * a List, an Edit and a Create components. The properties of
 * the phone model are:
 *
 * name -> Name of the Phone
 * brand -> Brand referencing the brand resource
 * so -> Operative System
 * water_proof -> Whether the phone is water resistant or not
 * h5g -> Whether the phone has 5G Connectivity support
 * ram -> Amount of ram in GB
 *
 * @param props
 * @returns {JSX.Element}
 */

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