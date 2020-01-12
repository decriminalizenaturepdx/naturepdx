import { h } from 'preact'
import { useState } from 'preact/hooks'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const SignUpForm = () => {
  const [firstNameInvalid, setFirstNameInvalid] = useState(false)
  const [lastNameInvalid, setLastNameInvalid] = useState(false)
  const [emailInvalid, setEmailInvalid] = useState(false)

  const validateInputs = (firstName, lastName, email) => {
    let invalid = false

    if (!firstName) {
      setFirstNameInvalid(true)
      invalid = true
    } else {
      setFirstNameInvalid(false)
    }

    if (!lastName) {
      setLastNameInvalid(true)
      invalid = true
    } else {
      setLastNameInvalid(false)
    }

    if (!email || emailRegEx.test(email) === false) {
      setEmailInvalid(true)
      invalid = true
    } else {
      setEmailInvalid(false)
    }
    return invalid
  }

  const handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    const form = event.currentTarget
    const firstNamed = form.elements.firstName.value.trim()
    const lastName = form.elements.lastName.value.trim()
    const email = form.elements.email.value.trim()
    const isValid = validateInputs(firstNamed, lastName, email)
    if (isValid) {
      // TODO: html encode values and submit form
    }
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <h3>Sign Up to Our Newsletter</h3>
      <Form.Group controlId='firstName'>
        <Form.Label>First name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter first name'
          isInvalid={firstNameInvalid}
        />
        <Form.Control.Feedback type='invalid'>
          This is a required field
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId='lastName'>
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter last name'
          isInvalid={lastNameInvalid}
        />
        <Form.Control.Feedback type='invalid'>
          This is a required field
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId='email'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          as='input'
          type='text'
          placeholder='Enter email'
          isInvalid={emailInvalid}
        />
        <Form.Control.Feedback type='invalid'>
          Please type a valid email address
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default SignUpForm
