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
import { url } from '../config/connection';
import AddAddressButton from './AddAddressButton';

const validateRequired = required();

const CompanyCreate = (props) => {
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

const CompanyTitle = ({ record }) => (<span>{record.name}</span>);

const CompanyEdit = props => {
  return (
    <Edit {...props} title={<CompanyTitle />}>
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

const CompanyShow = props => (
  <Show {...props} title={<CompanyTitle />}>
    <TabbedShowLayout>
      <Tab label="summary">
        <TextField source="name" />
        <TextField source="description" />
        <S3FileField apiRoot={url} source="cover" />
      </Tab>
      <Tab label="addresses" path="addresses">
        <ReferenceManyField reference="address" target="companyId" addLabel={false}>
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

const CompanyDescription = ({ record }) => {
  return <div>{record.description}</div>;
};

const CompanyList = props => (
  <List {...props}>
    <Datagrid rowClick="show" expand={<CompanyDescription />}>
      <TextField source="name" />
    </Datagrid>
  </List>
);

export default {
  list: CompanyList,
  create: CompanyCreate,
  edit: CompanyEdit,
  show: CompanyShow,
};
