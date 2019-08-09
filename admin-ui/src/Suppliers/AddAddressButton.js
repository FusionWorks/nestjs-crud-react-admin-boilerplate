import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    marginTop: '1em',
  },
};

const AddAddressButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/address/create?supplierId=${record.id}`}
    label="Add an address"
    title="Add an address"
  />
);

export default withStyles(styles)(AddAddressButton);
