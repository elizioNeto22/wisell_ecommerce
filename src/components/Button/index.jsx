import React from 'react'
import { ButtonContainer } from './styles.jsx'

// Dessa forma fica muito mais fácil de usar o button em outros components
// children é o que é passado entre as tags <button> children </button>
// ...otherProps server para por exemplo, se tiver um type ele será passado como props
const Button = ({ children, ...props }) => <ButtonContainer {...props}>{children}</ButtonContainer>

// export const RoundButton = ({ children, ...props }) => <ButtonContainer {...props}>{children}</ButtonContainer>

export default Button
