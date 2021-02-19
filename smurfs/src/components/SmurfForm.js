import React, { useState } from "react";
import { postSmurf } from "../store/actions/smurfActions";
import { connect } from 'react-redux';

const initialFormValues = {
  name: "",
  age: "",
  height: "",
};

const SmurfForm = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const addSmurf = (event) => {
    event.preventDefault();
    const newSmurf = {
      name: formValues.name,
      age: formValues.age,
      height: `${formValues.height}cm`
    };
    props.postSmurf(newSmurf);
    setFormValues(initialFormValues);
  };

  return (
    <form onSubmit={addSmurf}>
      <h3>Add a Smurf</h3>
      <label htmlFor="name">
        Name:&nbsp;
        <input
          id="name"
          type="text"
          name="name"
          value={formValues.name}
          onChange={onInputChange}
          data-testid="name"
        />
      </label>
      <label htmlFor="age">
        Age:&nbsp;
        <input
          id="age"
          type="text"
          name="age"
          value={formValues.age}
          onChange={onInputChange}
          data-testid="age"
        />
      </label>
      <label htmlFor="height">
        Height:&nbsp;
        <input
          id="height"
          type="text"
          name="height"
          value={formValues.height}
          onChange={onInputChange}
          data-testid="height"
        />
      </label>
      <button>Add</button>
    </form>
  );
};

const mapStateToProps = state => {
    return {
        isPosting: state.isPosting,
        formError: state.formError
    }
}

export default connect(mapStateToProps,{postSmurf})(SmurfForm);

