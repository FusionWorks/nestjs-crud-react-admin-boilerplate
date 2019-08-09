import React from 'react';
import randomstring from 'randomstring';
import { S3FileInput, S3FileField } from '@fusionworks/ra-s3-input';
import {
  TabbedShowLayout,
  Tab,
  List,
  Create,
  SimpleForm,
  Edit,
  Show,
  ReferenceManyField,
  Datagrid,
  EditButton,
  TextField,
  TextInput,
  required,
} from 'react-admin';
import AddAddressButton from './AddAddressButton';
import { url } from '../config/connection';

const validateRequired = required();

const SupplierCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="show">
        <TextInput source="name" />
        <TextInput source="description" />
        <S3FileInput
          apiRoot={url}
          source="cover"
          validate={validateRequired}
          uploadOptions={{
            signingUrl: `${url}/s3/sign`,
            s3path: `NestJsAdminBoilerplate/${randomstring.generate(10)}`,
            multiple: true,
            accept: 'image/*',
          }}
          multipleFiles
          fileCoverImg="http://www.sclance.com/pngs/file-png/file_png_487794.jpg"
        />
      </SimpleForm>
    </Create>
  );
};

const SupplierTitle = ({ record }) => (<span>{record.name}</span>);

const SupplierEdit = props => {
  return (
    <Edit {...props} title={<SupplierTitle />}>
      <SimpleForm redirect="list">
        <TextInput source="name" />
        <TextInput source="description" />
        <S3FileInput
          apiRoot={url}
          source="cover"
          validate={validateRequired}
          uploadOptions={{
            signingUrl: `${url}/s3/sign`,
            s3path: `NestJsAdminBoilerplate/${randomstring.generate(10)}`,
            multiple: false,
            accept: 'image/*',
          }}
          fileCoverImg="http://www.sclance.com/pngs/file-png/file_png_487794.jpg"
        />
      </SimpleForm>
    </Edit>
  );
};

const SupplierShow = props => (
  <Show {...props} title={<SupplierTitle />}>
    <TabbedShowLayout>
      <Tab label="summary">
        <TextField source="name" />
        <TextField source="description" />
        <S3FileField apiRoot={url} source="cover" />
      </Tab>
      <Tab label="addresses" path="addresses">
        <ReferenceManyField reference="address" target="supplierId" addLabel={false}>
          <Datagrid>
            <TextField source="name" />
            <TextField source="city" />
            <TextField source="street" />
            <TextField source="notes" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
        <AddAddressButton />
      </Tab>
    </TabbedShowLayout>
  </Show>
);

const SupplierDescription = ({ record }) => {
  return (
    <div
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={
        { __html: record.description }
      }
    />
  );
};

const SupplierList = props => (
  <List {...props}>
    <Datagrid rowClick="show" expand={<SupplierDescription />}>
      <TextField source="name" />
    </Datagrid>
  </List>
);

export default {
  list: SupplierList,
  create: SupplierCreate,
  edit: SupplierEdit,
  show: SupplierShow,
};
