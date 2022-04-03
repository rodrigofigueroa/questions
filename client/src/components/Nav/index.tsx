import styled, { css }  from 'styled-components'
import { openNav }      from '../../interfaces'

const Nav = styled.nav<openNav>`
  width: 100%;
  padding: 20px;
  height: auto;
  max-height: 160px;
  background: #fff;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: all 301.553ms ease 0ms;
  a {
    padding: 5px 15px;
    border: 2px solid #61a4bc;
    border-radius: 5px;
    color: #61a4bc;
    transition: all 249.625ms ease 0ms;
    margin-right: 20px;
    text-decoration: none;
    &:hover {
      background: #61a4bc;
      color: #fff;
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    max-height: 200px;
    a {
      margin-right: 0;
    }
  }
  ${(props) =>
    !props.open
      ? css`
          height: 0px;
          max-height: 0;
          padding:0;
          overflow: hidden;
        `
      : ''}
`

export default Nav
