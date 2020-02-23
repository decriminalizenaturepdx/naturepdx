import React, { useState }  from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  heading: {
    margin: '32px 0 0 !important'
  },
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
    '&': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'baseline'
    },
    '& .Mui-error:after': {
      borderBottomColor: '#9a1f16'
    },
    '& .Mui-error': {
      color: '#9a1f16'
    }
  }
}))

const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const SignUpForm = () => {
  const classes = useStyles()
  const [firstNameValue, setFirstNameValue] = useState('')
  const [firstNameInvalid, setFirstNameInvalid] = useState(false)
  const [lastNameValue, setLastNameValue] = useState('')
  const [lastNameInvalid, setLastNameInvalid] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [emailInvalid, setEmailInvalid] = useState(false)
  const [invalidResponse, setInvalidResponse] = useState(false)
  const [submitSuccessful, setSubmitSuccessful] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateInputs = () => {
    let invalid = false

    if (!firstNameValue || !firstNameValue.trim()) {
      setFirstNameInvalid(true)
      invalid = true
    } else {
      setFirstNameInvalid(false)
    }

    if (!lastNameValue || !lastNameValue.trim()) {
      setLastNameInvalid(true)
      invalid = true
    } else {
      setLastNameInvalid(false)
    }

    if (!emailValue || !emailRegEx.test(emailValue) || !emailValue.trim()) {
      setEmailInvalid(true)
      invalid = true
    } else {
      setEmailInvalid(false)
    }
    return invalid
  }

  const handleSubmit = async event => {
    event.preventDefault()
    event.stopPropagation()
    const isInvalid = validateInputs()
    if (!isInvalid) {
      const body = {
        firstName: firstNameValue.trim(),
        lastName: lastNameValue.trim(),
        email: emailValue.trim()
      }
      try {
        setIsSubmitting(true)
        const resp = await fetch('http://localhost:3000/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        if (resp.status >= 400) {
          throw resp
        }
        setSubmitSuccessful(true)
        setInvalidResponse(false)
      } catch (err) {
        setInvalidResponse(true)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <h3 className={classes.heading}>Sign Up to Our Newsletter</h3>
      <TextField
        error={firstNameInvalid}
        helperText={firstNameInvalid ? 'This is a required field' : ''}
        label='First name'
        onChange={evt => setFirstNameValue(evt.target.value)}
        type='text'
        value={firstNameValue}
        variant='filled'
      />
      <TextField
        error={lastNameInvalid}
        helperText={lastNameInvalid ? 'This is a required field' : ''}
        label='Last name'
        onChange={evt => setLastNameValue(evt.target.value)}
        type='text'
        value={lastNameValue}
        variant='filled'
      />
      <TextField
        error={emailInvalid}
        helperText={emailInvalid ? 'Please type a valid email address' : ''}
        label='Email'
        onChange={evt => setEmailValue(evt.target.value)}
        type='text'
        value={emailValue}
        variant='filled'
      />
      {invalidResponse && (
        <Alert severity='error'>Something went wrong please try again</Alert>
      )}
      {submitSuccessful && (
        <Alert severity='success'>Thank you for signing up</Alert>
      )}
      <Button
        variant='contained'
        type='submit'
        disabled={isSubmitting || submitSuccessful}
      >
        Submit
      </Button>
      {isSubmitting && <CircularProgress />}
    </form>
  )
}

export default SignUpForm
