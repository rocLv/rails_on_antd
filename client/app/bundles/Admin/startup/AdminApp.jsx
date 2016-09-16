import React from 'react';
import ReactOnRails from 'react-on-rails';

import Dashboard from '../containers/Dashboard'

const AdminApp = (props) => (
  <Dashboard {...props} />
);

ReactOnRails.register({ AdminApp });
