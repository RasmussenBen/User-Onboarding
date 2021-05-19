import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from '../validation/formSchema'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
};

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
};

const initialUsers = [];
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  };

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      });
  };

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  };





};