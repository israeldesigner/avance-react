/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const DataSelect = ['Consultoria', 'Contábil', 'Fiscal', 'Pessoal', 'Pessoa física', 'Registro', 'Dúvidas e sugestões', ''];
// const DataAlerts = [
//   'primary',
//   'secondary',
//   'success',
//   'danger',
//   'warning',
//   'info',
//   'light',
//   'dark',
// ];

// const makeAlert = (x) => {
//   DataAlerts.map((variant, idx) => (
//     <Alert key={idx} variant={x}>
//       This is a
//       {x}
//       alert with
//       <Alert.Link href="#">an example link</Alert.Link>
//       . Give it a click if you
//       like.
//     </Alert>
//   ));
// };
const MakeItem = (X) => <option value={X}>{X}</option>;
const AlertNovo = () => {
  const [show, setShow] = useState(false);
  return (
    <Alert variant="success" show>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This example
        text is going to run a bit longer so that you can see how spacing within an
        alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice
        and tidy.
      </p>
    </Alert>
  );
};
const baseUrl = 'http://localhost:3003/send-mail';
const AlertDismissibleExample = (alertHidden) => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Ocorreu um erro</Alert.Heading>
        <p>
          Infelizmente, nossos servidores estão fora do ar, tente novamente mais tarde.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
};

const formContatos = () => {
  useEffect(() => console.log('Eu estou montado'), []);
  const [contato, setContato] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const onChangeContatoHandler = (event) => {
    const { target: { value, name } } = event;
    setContato({ ...contato, [name]: value });
  };

  const resetForm = () => {
    setContato({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contato);
    axios({
      method: 'POST',
      url: baseUrl,
      data: contato,
    }).then((response) => {
      console.log(response);
      console.log(response.data);
      if (response.data.statusText === 'failed') {
        alert('servidor fora do ar');
        resetForm();
      } else if (response.data.status === 'success') {
        alert('Enviada com sucesso');
        resetForm();
      }
    }).catch((error) => {
      alert('servidor fora do ar');
      resetForm();
      console.log(error);
    });
  };
  return (
    <form id="formContact" onSubmit={handleSubmit} method="POST">
      <div className="form-group">
        {/* {makeAlert('info')} */}
      </div>
      {/* <AlertNovo />
      <AlertDismissibleExample /> */}
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="nome"
          aria-describedby="Nome"
          name="name"
          required
          value={contato.name}
          onChange={onChangeContatoHandler}
          placeholder="Nome"
        />
      </div>
      <div className="form-group">
        <Form.Group controlId="emailForm">
          <Form.Control
            type="text"
            required
            value={contato.email}
            name="email"
            onChange={onChangeContatoHandler}
            placeholder="seuemail@examplo.com.br"
          />
        </Form.Group>
      </div>
      <Form.Group controlId="assuntoForm">
        <Form.Control
          as="select"
          required
          value={contato.subject}
          name="subject"
          onChange={onChangeContatoHandler}
        >
          <option value="">Assunto</option>
          {DataSelect.map(MakeItem)}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="messageForm">
        <Form.Control
          as="textarea"
          required
          value={contato.message}
          name="message"
          onChange={onChangeContatoHandler}
          rows="5"
        />
      </Form.Group>
      <button
        type="submit"
        onChange={handleSubmit}
        className="btn btn-success btn-round btnSend"
      >
        Enviar
      </button>
    </form>
  );
};

export default formContatos;
