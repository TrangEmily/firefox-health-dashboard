import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
  root: {
    margin: '0 20px',
  },
});
const Picker = ({ classes, id, label, handleChange, options, value }) => (
  <form className={classes.root} autoComplete="off">
    <TextField
      select
      name={id}
      label={label}
      value={value}
      onChange={handleChange}>
      {options.map(({ label, id }) => (
        <MenuItem key={id} value={id}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  </form>
);

Picker.propTypes = {
  classes: PropTypes.shape().isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default withStyles(styles)(Picker);
