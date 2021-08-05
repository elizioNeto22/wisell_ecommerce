import React from 'react'
import { LinkContainer } from './styles.jsx'

const CustomLink = ({ children, ...props }) => <LinkContainer {...props}>{children}</LinkContainer>

export default CustomLink
