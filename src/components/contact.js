import React from 'react';
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
 ${tw`m-2 border rounded px-2 md:w-full`};
`
const TextArea = styled.textarea`
 ${tw`m-2 border rounded px-2 md:w-full`};
`

export default () =>
  <div class="w-full flex flex-col justify-around items-center">
    <h1 className="text-lg lg:text-3xl">Contact Us</h1>
    <form className="p-4 w-full md:w-8/12 lg:w-1/2 flex flex-col justify-around items-start">
      <FieldSet>
        <Label for="name">Name:</Label>
        <Input className="m-2 border rounded px-2" id="name" type="text" placeholder="John Doe" />
      </FieldSet>
      <FieldSet>
        <Label for="email">Email:</Label>
        <Input className="m-2 border rounded px-2" id="email" type="email" placeholder="me@example.com" />
      </FieldSet>
      <FieldSet>
        <Label for="message">Message:</Label>
        <TextArea id="message" type="text" placeholder="Enter a message..." />
      </FieldSet>
      <FieldSet>
        <Button className="w-20" type="submit">Send</Button>
        <div className="flex-grow"/>
      </FieldSet>

    </form>
  </div>