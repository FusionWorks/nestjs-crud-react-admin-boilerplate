import React from 'react';
import { Admin, Resource, ShowGuesser, ListGuesser } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud';
import { GuestCreate, GuestEdit } from './Guests';

const dataProvider = crudProvider('http://localhost:3000');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="guests" list={ListGuesser} create={GuestCreate} edit={GuestEdit} show={ShowGuesser} />
  </Admin>
);
export default App;