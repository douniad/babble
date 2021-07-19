import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../Services/Auth-Api-Service'
import {NavLink} from 'react-router-dom'
import './Register.css'


export default class RegistrationForm extends Component {

  static defaultProps = {
    onRegistrationSuccess: () => {}
  }



  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value
    })
      .then(user => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
        this.props.history.push('/childboard')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <div className="RegistrationDiv">
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name:  <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name'>
          </Input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            Username:<Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password:  <Required />
          </label>
          <Input className="LastLabel"
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
          </div>
        <Button className="submitregistration" type='submit'>
          Register
        </Button>

        
        
      </form>
      <p>Already have an account? <NavLink to={'/login'}>Log in</NavLink></p>
      </div>
      
      
    )
  }
}

