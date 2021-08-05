import styled, { css } from 'styled-components'

const getTextStyles = ({ size }) => {
  if (size === 'lg') {
    return largeText
  } else if (size === 'md') {
    return mediumText
  } else return smallText
}

const largeText = css`
  /* padding: 0 55px 0 55px; */
  font-size: 18px;
  color: white;
`

const mediumText = css`
  /* padding: 0 55px 0 55px; */
  font-size: 16px;
  color: white;
`

const smallText = css`
  /* padding: 0 55px 0 55px; */
  font-size: 14px;
  color: white;
`

export const TextContainer = styled.p`
  font-weight: 400;
  margin: 0;
  ${getTextStyles}
`
