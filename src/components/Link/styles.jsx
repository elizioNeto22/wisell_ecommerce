import styled, { css } from 'styled-components'

// css allows us to write a block of css that we can pass in
// and render as css inside of any style component

const getLinkSizes = ({ size }) => {
  if (size === 'lg') {
    return largeLink
  } else if (size === 'md') {
    return mediumLink
  } else if (size === 'mm') {
    return miniLink
  } else return smallLink
}

const getLinkHover = ({ hover }) => (hover ? linkHover : null)

const linkHover = css`
  &::after {
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background: #92b15d;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
`

const miniLink = css`
  font-size: 12px;
  font-weight: 400;
`

const smallLink = css`
  font-size: 14px;
  font-weight: 400;
`

const mediumLink = css`
  font-size: 16px;
`
const largeLink = css`
  font-size: 18px;
`

export const LinkContainer = styled.a`
  text-decoration: none;
  color: #ffffff;

  ${getLinkHover}
  ${getLinkSizes}
`
