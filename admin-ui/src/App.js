import React from 'react';
import { Admin, Resource } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud';
import suppliers from './Suppliers';
import addresses from './Addresses';
import { url } from './config/connection';

const dataProvider = crudProvider(url);
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="supplier" {...suppliers} />
    <Resource name="address" {...addresses} />
  </Admin>
);
export default App;