import React from 'react'
import { TextContainer } from './styles.jsx'

export const Text = ({ children, ...props }) => <TextContainer {...props}>{children}</TextContainer>

export const Title = ({ children, ...props }) => <TextContainer {...props}>{children}</TextContainer>
