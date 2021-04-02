/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { Toast, toast } from 'react-toastify';
import { FormStyle, ButtonStyled } from '../assets/stylesJs/resetStyles';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => ({
      value,
    }));
  }

  render() {
    toast.configure();
    const notify = () => {
      toast('notificação');
    };
    return (
      <FormStyle>
        <h3>
          Escreva seu nome:
          {this.state.value}
        </h3>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <ButtonStyled primary type="button" onClick={notify}>Primary</ButtonStyled>
        <hr />
      </FormStyle>
    );
  }
}

export default Form;
