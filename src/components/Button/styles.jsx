import styled, { css } from 'styled-components'

// css allows us to write a block of css that we can pass in
// and render as css inside of any style component

const getButtonSizes = ({ size }) => {
  if (size === 'lg') {
    return largeButton
  } else if (size === 'md') {
    return mediumButton
  } else return smallButton
}

const getButtonShapes = ({ shape }) => {
  if (shape === 'round') {
    return RoundBtn
  } else return ButtonContainer
}

const invertedButton = css`
  background-color: white;
  color: #90ae63;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

const smallButton = css`
  background-color: #4285f4;
  color: #90ae63;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

const mediumButton = css`
  height: 50px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 16px;
  background-color: #4285f4;
  color: #90ae63;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`
const largeButton = css`
  height: 65px;
  line-height: 65px;
  padding: 0 55px 0 55px;
  font-size: 18px;
  background-color: #4285f4;
  color: #90ae63;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

export const ButtonContainer = styled.button`
  min-width: 125px;
  width: auto;
  padding: 10px 20px;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: bolder;
  cursor: pointer;
  ${getButtonSizes}
  ${getButtonShapes}
`

export const RoundBtn = css`
  border-radius: 50px;
  /* ${getButtonSizes} */
`
