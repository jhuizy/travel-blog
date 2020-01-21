import React from 'react';

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Button = styled.button`
 ${tw`hover:bg-teal-600 bg-teal-400 py-1 px-6 rounded-sm text-white font-bold font-sans text-xs hover:scale-110 transition-transform transition-bg transition-500 transition-ease`};
 transition: transform 0.2s ease;
 ${props => props.disabled ? "cursor: not-allowed;" : "cursor: pointer;"}
`

export default Button;