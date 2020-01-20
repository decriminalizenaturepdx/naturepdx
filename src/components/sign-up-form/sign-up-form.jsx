import { h } from 'preact'
import { useState } from 'preact/hooks'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  heading: {
    margin: '32px 0 0 !important',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    '&': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'baseline',
    },
    '& .Mui-error:after': {
      borderBottomColor: '#9a1f16',
    },
    '& .Mui-error': {
      color: '#9a1f16',
    },
  },
}));

const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const SignUpForm = () => {
  const classes = useStyles()
  const [firstNameValue, setFirstNameValue] = useState('')
  const [firstNameInvalid, setFirstNameInvalid] = useState(false)
  const [lastNameValue, setLastNameValue] = useState('')
  const [lastNameInvalid, setLastNameInvalid] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [emailInvalid, setEmailInvalid] = useState(false)

  const validateInputs = () => {
    let invalid = false

    if (!firstNameValue) {
      setFirstNameInvalid(true)
      invalid = true
    } else {
      setFirstNameInvalid(false)
    }

    if (!lastNameValue) {
      setLastNameInvalid(true)
      invalid = true
    } else {
      setLastNameInvalid(false)
    }

    if (!emailValue || emailRegEx.test(emailValue) === false) {
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
    const isValid = validateInputs()
    if (isValid) {
      // TODO: html encode values and submit form
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <h3 className={classes.heading}>Sign Up to Our Newsletter</h3>
      <TextField
        error={firstNameInvalid}
        helperText={firstNameInvalid ? 'This is a required field' : ''}
        label="First name"
        onChange={evt => setFirstNameValue(evt.target.value)}
        type='text'
        value={firstNameValue}
        variant="filled"
      />
      <TextField
        error={lastNameInvalid}
        helperText={lastNameInvalid ? 'This is a required field' : ''}
        label="Last name"
        onChange={evt => setLastNameValue(evt.target.value)}
        type='text'
        value={lastNameValue}
        variant="filled"
      />
      <TextField
        error={emailInvalid}
        helperText={emailInvalid ? 'Please type a valid email address' : ''}
        label="Email"
        onChange={evt => setEmailValue(evt.target.value)}
        type='text'
        value={emailValue}
        variant="filled"
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  )
}

export default SignUpForm
