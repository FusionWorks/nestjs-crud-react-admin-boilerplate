import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  Edit,
  Filter,
  required,
  email,
} from 'react-admin';

const validateEmail = [required(), email()];
const validateRequired = required();

export const GuestCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
      <TextInput source="firstName" validate={validateRequired} />
      <TextInput source="lastName" validate={validateRequired} />
      <TextInput source="email" validate={validateEmail} />
    </SimpleForm>
  </Create>
);

const GuestEditTitle = ({ record }) => (<span>{`${record.firstName} ${record.lastName}`}</span>);

export const GuestEdit = props => (
  <Edit {...props} title={<GuestEditTitle />}>
    <SimpleForm redirect="list">
      <TextInput source="firstName" validate={validateRequired} />
      <TextInput source="lastName" validate={validateRequired} />
      <TextInput source="email" validate={validateEmail} />
      <BooleanInput source="isPresent" />
    </SimpleForm>
  </Edit>
);