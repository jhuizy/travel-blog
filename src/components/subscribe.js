import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro'
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Button from "./button"

const STATE_INIT = "init"
const STATE_LOADING = "loading"
const STATE_OK = "ok"
const STATE_ERR = "error"

const Container = styled.div`
  ${tw`w-full flex flex-box justify-around items-center`}

  form {
    ${tw`w-full w-full lg:w-1/2 lg:mx-1`}
  }

  .subscribe {
    ${tw`flex flex-col lg:flex-row`}

    input {
      ${tw`flex-grow flex-1 px-2 py-1 border border-teal-500 my-2 lg:my-0 lg:mr-1 `}
    }
    
    button {
      ${tw`flex-0 flex-shrink w-auto`}
    }
  }

  h2,
  .subscribe,
  .error,
  .success {
    ${tw`m-4`}
  }

  .success {
    ${tw`border-l-4 border-green-500 bg-green-200 py-2 px-2`}
  }

  .error {
    ${tw`border-l-4 border-red-500 bg-red-200 py-2 px-2`}
  }
  
`

const stateToLabel = (state) => {
  switch (state) {
    case STATE_LOADING:
      return "Subscribing...";
    case STATE_OK:
      return "Subscribed!"
    default:
      return "Subscribe"
  }
}

export default ({ props }) => {

  const [email, setEmail] = useState('');
  const [state, setState] = useState(STATE_INIT);

  const handleSubmit = e => {
    setState(STATE_LOADING)
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {
        if (data && data.result == "success") {
          setState(STATE_OK)
        } else {
          setState(STATE_ERR)
        }
      })
      .catch(err => setState(STATE_ERR))
  }

  const handleEmailChange = e => setEmail(e.target.value)

  return (
    <Container className="container">
      <form onSubmit={handleSubmit}>
        <h2>Subscribe to recieve email updates</h2>
        <div className="subscribe">
          <input
            placeholder="Email address"
            name="email"
            type="text"
            onChange={handleEmailChange}
          />
          <Button disabled={state === STATE_OK} type="submit">{stateToLabel(state)}</Button>
        </div>

        {state === STATE_ERR &&
          <div className="error">
            <div>Something went wrong, have you already subscribed?...</div>
          </div>
        }

        {state === STATE_OK &&
          <div className="success">
            <div>Thanks for subscribing!</div>
            <div>Check your junk mail folder if you don't receive an email soon</div>
          </div>
        }
      </form>
    </Container>
  );
};