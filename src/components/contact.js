import React, { useState } from 'react';
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Button from './button'

const FieldSet = styled.div`
 ${tw`w-full flex flex-col md:flex-row m-2 md:items-center md:justify-center`};
`

const Label = styled.label`
 ${tw`mx-2 md:m-1 md:w-1/3`};
`

const Input = styled.input`
 ${tw`appearance-none m-2 border rounded px-2 md:w-full`};
`
const TextArea = styled.textarea`
 ${tw`m-2 border rounded px-2 md:w-full`};
`

const STATE_INIT = "init"
const STATE_NORMAL = "normal"
const STATE_SENDING = "sending"
const STATE_SENT = "sent"

const calculateBorderColor = (sendState, isValid) => {
  switch(sendState) {
    case STATE_INIT:
      return "border-black-500"
    default:
      return isValid ? "border-green-500" : "border-red-500"
  }
}

const validateName = s => s && s.length > 3
const validateEmail = s => s && s.length > 3 && s.indexOf("@") !== -1 && s.indexOf(".") !== -1
const validateMessage = s => s && s.length > 3

export default () => {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sendState, setSendState] = useState(STATE_INIT)

  const onUpdate = (key, value) => {
    switch(key) {
      case "name": 
        setName(value)
        break
      case "email":
        setEmail(value)
        break
      case "message":
        setMessage(value)
        break  
    }

    setSendState(STATE_NORMAL)
  }

  const allValid = () =>
    validateName(name) && 
    validateEmail(email) && 
    validateMessage(message)

  const onSubmit = (e) => {
    e.preventDefault()
    if (allValid()) {
      setSendState(STATE_SENDING)
      setTimeout(() => {
        setSendState(STATE_SENT)
      }, 1000)
    }
  }

  return (
    <div class="w-full flex flex-col justify-around items-center">
      <h1 className="text-lg lg:text-3xl">Contact Us</h1>
      <form 
        className="p-4 w-full md:w-8/12 lg:w-1/2 flex flex-col justify-around items-start"
        >
        <FieldSet>
          <Label for="name">Name:</Label>
          <Input
            id="name"
            className={`m-2 border rounded px-2 ${calculateBorderColor(sendState, validateName(name))}`}
            type="text"
            placeholder="John Doe"
            value={name}
            disabled={sendState == STATE_SENT}
            onChange={e => onUpdate("name", e.target.value)}
          />
        </FieldSet>
        <FieldSet>
          <Label for="email">Email:</Label>
          <Input
            id="email"
            className={`m-2 border rounded px-2 ${calculateBorderColor(sendState, validateEmail(email))}`}
            type="email"
            placeholder="me@example.com"
            disabled={sendState == STATE_SENT}
            value={email}
            onChange={e => onUpdate("email", e.target.value)}
          />
        </FieldSet>
        <FieldSet>
          <Label for="message">Message:</Label>
          <TextArea
            className={`${calculateBorderColor(sendState, validateMessage(message))}`}
            id="message"
            type="text"
            placeholder="Enter a message..."
            disabled={sendState == STATE_SENT}
            value={message}
            onChange={e => onUpdate("message", e.target.value)}
          />
        </FieldSet>
        <FieldSet>
          <Button 
            className="m-4 text-center" 
            type="submit"
            disabled={sendState == STATE_SENT || !allValid()}
            onClick={onSubmit}
            >
            { sendState == STATE_SENDING ? "Sending..." : sendState == STATE_SENT ? "Sent" : "Send" }
          </Button>
          <div className="flex-grow" />
        </FieldSet>

      </form>
    </div>
  )
}