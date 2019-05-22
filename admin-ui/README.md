# React Admin + NestJS CRUD Quick Start

<p align="center">
  <a href="../README.md">Overview</a>
  &nbsp;&nbsp;&nbsp;
  <i><a href="README.md">Frontend</a></i>
  &nbsp;&nbsp;&nbsp;
  <a href="../api/README.md">Backend</a>
  &nbsp;&nbsp;&nbsp;
</p>

# Administration panel UI

Frontend portion of this boilerplate is based on awesome [React Admin](https://github.com/marmelab/react-admin) framework, which greatly simplifies creation of admin interfaces. UI allows performing basic CRUD operations on guests list.

## Prerequisites

NodeJS, NPM and Yarn installed, [Backend](../api/README.md) should be up and running.

## Running the app

```bash
cd admin-ui
yarn install
yarn start
```

## Creating from scratch

### Initializing React application

```bash
npm install -g create-react-app
create-react-app admin-ui
cd admin-ui
```

### Adding React Admin to the project

```bash
yarn add react-admin prop-types`
```

### Adding [dataprovider](https://marmelab.com/react-admin/DataProviders.html) to match NestJS CRUD backend: [@FusionWorks/ra-data-nest-crud](https://github.com/FusionWorks/react-admin-nestjsx-crud-dataprovider)

```bash
yarn add @fusionworks/ra-data-nest-crud
```

### Initializing React Admin component and creating guest editor

Update [src/App.js](src/App.js)

```javascript
import React from 'react';
import { Admin, Resource, ShowGuesser, ListGuesser } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud';
import { GuestCreate, GuestEdit } from './Guests';

const dataProvider = crudProvider('http://localhost:3001');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="guests" list={ListGuesser} create={GuestCreate} edit={GuestEdit} show={ShowGuesser} />
  </Admin>
);
export default App;
```

And add corresponding forms to [src/Guests/index.js](src/Guests/index.js). Please note that we are using React Admin's ListGuesser and ShowGuesser for list and show veiws. If needed they could be replaced with custom implementation same way as create and edit forms below.

```javascript
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
```

### We are done!

Read React Admins's [documentation](https://marmelab.com/react-admin/index.html) if you need to implement more complex scenarious and behaviours
