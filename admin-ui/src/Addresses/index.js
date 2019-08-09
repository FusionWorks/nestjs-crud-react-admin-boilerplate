import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  Edit,
  required,
  TabbedShowLayout,
  Tab,
  TextField,
  Show,
  ReferenceField,
  List,
  Datagrid,
  ReferenceInput,
  SelectInput,
} from 'react-admin';
import { GMapInput, GMapField } from '@fusionworks/ra-google-maps-input';
import { parse } from 'query-string';

const validateRequired = required();

export const AddressCreate = props => {
  const { location } = props;
  const { supplierId } = parse(location.search);
  const redirect = supplierId ? `/supplier/${supplierId}/show/addresses` : false;

  return (
    <Create {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" validate={validateRequired} />
        <TextInput source="city" validate={validateRequired} />
        <TextInput source="street" validate={validateRequired} />
        <TextInput source="zip" validate={validateRequired} />
        <TextInput source="notes" validate={validateRequired} />
        {supplierId ? null : (
          <ReferenceInput source="supplierId" reference="supplier">
            <SelectInput optionText="name" optionValue="id" />
          </ReferenceInput>
        )}
        <GMapInput source="geo" searchable googleKey="" validate={validateRequired} />
      </SimpleForm>
    </Create>
  );
};

const AddressTitle = ({ record }) => (<span>{`${record.name}`}</span>);

export const AddressEdit = props => (
  <Edit {...props} title={<AddressTitle />}>
    <SimpleForm redirect={(basePath, id, data) => `/supplier/${data.supplierId}/show/addresses`}>
      <TextInput source="name" validate={validateRequired} />
      <TextInput source="city" validate={validateRequired} />
      <TextInput source="street" validate={validateRequired} />
      <TextInput source="zip" validate={validateRequired} />
      <TextInput source="notes" validate={validateRequired} />
      <GMapInput source="geo" searchable googleKey="" validate={validateRequired} />
    </SimpleForm>
  </Edit>
);

export const AddressList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="city" />
      <TextField source="street" />
      <TextField source="zip" />
      <TextField source="notes" />
      <ReferenceField
        source="supplierId"
        reference="supplier"
        linkType="show"
      >
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const AddressShow = props => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="resources.summary.name">
        <TextField source="name" />
        <TextField source="city" />
        <TextField source="street" />
        <TextField source="zip" />
        <TextField source="notes" />
        <ReferenceField
          source="supplierId"
          reference="supplier"
          linkType="show"
        >
          <TextField source="name" />
        </ReferenceField>
        <GMapField source="geo" googleKey="" />
      </Tab>
    </TabbedShowLayout>
  </Show>

);

export default {
  list: AddressList,
  create: AddressCreate,
  edit: AddressEdit,
  show: AddressShow,
};
