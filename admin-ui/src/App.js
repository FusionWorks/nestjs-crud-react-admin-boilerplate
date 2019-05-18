import React from 'react';
import { Admin, Resource } from 'react-admin';
import provider from '@fusionworks/ra-data-nest-crud';

const dataProvider = provider('http://jsonplaceholder.typicode.com');
const App = () => <Admin dataProvider={dataProvider} />;

export default App;