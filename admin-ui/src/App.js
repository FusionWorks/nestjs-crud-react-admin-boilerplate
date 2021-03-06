import React from 'react';
import { Admin, Resource } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud';
import companies from './Companies';
import addresses from './Addresses';
import { url } from './config/connection';

const dataProvider = crudProvider(url);
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="company" {...companies} />
    <Resource name="address" {...addresses} />
  </Admin>
);
export default App;